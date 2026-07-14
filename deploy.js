import fs from 'fs';
import https from 'https';
import { execSync } from 'child_process';

const username = '$invoicehub360dev';
const password = 'p4v5g10ZyJDresmihgyyZbu7RgE9l6yWWgDWnyot5SihR4jJcTmvxKubZxAu';
const auth = Buffer.from(`${username}:${password}`).toString('base64');

console.log('1. Building production assets...');
execSync('npm run build', { stdio: 'inherit' });

console.log('\n2. Compressing build folder into dist.zip...');
if (fs.existsSync('dist.zip')) {
  fs.unlinkSync('dist.zip');
}
execSync('powershell -Command "Compress-Archive -Path dist\\* -DestinationPath dist.zip -Force"', { stdio: 'inherit' });

console.log('\n3. Deploying to Azure App Service via Zip Deploy API using Node.js...');
const fileData = fs.readFileSync('dist.zip');

const options = {
  hostname: 'invoicehub360dev.scm.azurewebsites.net',
  path: '/api/zipdeploy',
  method: 'POST',
  headers: {
    'Authorization': `Basic ${auth}`,
    'Content-Type': 'application/zip',
    'Content-Length': fileData.length
  },
  timeout: 300000 // 5 minutes
};

const req = https.request(options, (res) => {
  console.log(`Response Status: ${res.statusCode}`);
  let responseBody = '';
  res.on('data', (chunk) => {
    responseBody += chunk;
  });
  res.on('end', () => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log('\nDeployment completed successfully! Website is live at: https://invoicehub360dev.azurewebsites.net');
    } else {
      console.error(`\nDeployment failed with status ${res.statusCode}: ${responseBody}`);
    }
    cleanup();
  });
});

req.on('error', (err) => {
  console.error('\nDeployment failed! Error: ', err.message);
  cleanup();
});

req.write(fileData);
req.end();

function cleanup() {
  console.log('\n4. Cleaning up temporary zip archive...');
  if (fs.existsSync('dist.zip')) {
    fs.unlinkSync('dist.zip');
  }
}
