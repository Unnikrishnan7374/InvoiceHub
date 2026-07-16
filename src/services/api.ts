import config from '../config';

const api = {
  get: async <T>(url: string): Promise<{ data: T }> => {
    const cleanUrl = url.startsWith('/') ? url : `/${url}`;
    const response = await fetch(`${config.api.API_URL}${cleanUrl}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { data };
  },
  post: async <T>(url: string, body: any): Promise<{ data: T }> => {
    const cleanUrl = url.startsWith('/') ? url : `/${url}`;
    const response = await fetch(`${config.api.API_URL}${cleanUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { data };
  }
};

export default api;
