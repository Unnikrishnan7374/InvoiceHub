/**
 * Shared Validation Utilities
 *
 * Common validation patterns and helper functions used across multiple modules
 * (Customer, Invoice, Estimation, Business Onboarding)
 *
 * Following DRY principles to avoid code duplication
 */

/**
 * Email Validation Regex
 * Standard email format validation
 */
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

/**
 * Phone Number Validation Regex (US Format)
 * Accepts formats: (123) 456-7890, 123-456-7890, 1234567890
 */
export const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

/**
 * Password Validation Regexes
 */
export const PASSWORD_REGEXES = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/,
  SPECIAL_CHAR: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
};

/**
 * Address Validation Regexes
 */
export const ADDRESS_REGEXES = {
  // City/State - only letters and spaces
  ALPHA_SPACES: /^[a-zA-Z\s]+$/,

  // ZIP Codes by country
  US_ZIP: /^\d{5}(-\d{4})?$/,
  INDIA_PIN: /^\d{6}$/,
  UK_POSTCODE: /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i,
  CANADA_POSTAL: /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/i,
};

/**
 * Business/Domain Name Validation Regexes
 */
export const BUSINESS_REGEXES = {
  // Domain name - lowercase letters, numbers, hyphens only
  DOMAIN_NAME: /^[a-z0-9-]+$/,

  // Business name - alphanumeric with common punctuation
  BUSINESS_NAME: /^[a-zA-Z0-9\s&.,'-]+$/,
};

/**
 * Number Validation Regexes
 */
export const NUMBER_REGEXES = {
  // Integer only
  INTEGER: /^\d+$/,

  // Decimal number (2 decimal places)
  DECIMAL: /^\d+(\.\d{1,2})?$/,

  // Percentage (0-100)
  PERCENTAGE: /^(100(\.0{1,2})?|[0-9]?[0-9](\.\d{1,2})?)$/,
};

/**
 * Country-specific validation configurations
 */
export const COUNTRY_CONFIGS = {
  USA: {
    zipLabel: 'ZIP Code',
    zipPlaceholder: '12345 or 12345-6789',
    zipRegex: ADDRESS_REGEXES.US_ZIP,
    zipErrorMessage: 'Please enter a valid US ZIP code (e.g., 12345 or 12345-6789)',
  },
  India: {
    zipLabel: 'PIN Code',
    zipPlaceholder: '123456',
    zipRegex: ADDRESS_REGEXES.INDIA_PIN,
    zipErrorMessage: 'Please enter a valid 6-digit PIN code',
  },
  UK: {
    zipLabel: 'Postcode',
    zipPlaceholder: 'SW1A 1AA',
    zipRegex: ADDRESS_REGEXES.UK_POSTCODE,
    zipErrorMessage: 'Please enter a valid UK postcode',
  },
  Canada: {
    zipLabel: 'Postal Code',
    zipPlaceholder: 'K1A 0B1',
    zipRegex: ADDRESS_REGEXES.CANADA_POSTAL,
    zipErrorMessage: 'Please enter a valid Canadian postal code',
  },
};

/**
 * Get country-specific ZIP/Postal code configuration
 */
export const getZipCodeConfig = (country: string) => {
  return COUNTRY_CONFIGS[country as keyof typeof COUNTRY_CONFIGS] || {
    zipLabel: 'ZIP/Postal Code',
    zipPlaceholder: 'Enter code',
    zipRegex: /^.+$/,
    zipErrorMessage: 'Please enter a valid ZIP/postal code',
  };
};

/**
 * Validate ZIP code based on country
 */
export const validateZipCode = (zipCode: string, country: string): boolean => {
  const config = getZipCodeConfig(country);
  return config.zipRegex.test(zipCode);
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

/**
 * Validate phone number format
 */
export const validatePhone = (phone: string): boolean => {
  return PHONE_REGEX.test(phone);
};

/**
 * Format currency value for display
 */
export const formatCurrency = (
  value: number,
  currency: string = 'USD',
  locale: string = 'en-US'
 ): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

/**
 * Parse currency string to number
 */
export const parseCurrency = (value: string): number => {
  return parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0;
};

/**
 * Validate decimal number with specific precision
 */
export const validateDecimal = (
  value: string,
  decimalPlaces: number = 2
): boolean => {
  const regex = new RegExp(`^\\d+(\\.\\d{1,${decimalPlaces}})?$`);
  return regex.test(value);
};

/**
 * Calculate percentage
 */
export const calculatePercentage = (
  value: number,
  total: number,
  decimalPlaces: number = 2
): number => {
  if (total === 0) return 0;
  return parseFloat(((value / total) * 100).toFixed(decimalPlaces));
};

/**
 * Calculate amount from percentage
 */
export const calculateAmountFromPercentage = (
  percentage: number,
  total: number,
  decimalPlaces: number = 2
): number => {
  return parseFloat(((percentage / 100) * total).toFixed(decimalPlaces));
};

/**
 * Sanitize string for domain name
 */
export const sanitizeDomainName = (value: string): string => {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove invalid characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove consecutive hyphens
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Truncate string with ellipsis
 */
export const truncate = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength - 3) + '...';
};

/**
 * Validation error message helpers
 */
export const ERROR_MESSAGES = {
  REQUIRED: (field: string) => `${field} is required`,
  MIN_LENGTH: (field: string, length: number) =>
    `${field} must be at least ${length} characters`,
  MAX_LENGTH: (field: string, length: number) =>
    `${field} cannot exceed ${length} characters`,
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  PASSWORDS_MISMATCH: 'Passwords must match',
  MIN_VALUE: (field: string, value: number) =>
    `${field} must be at least ${value}`,
  MAX_VALUE: (field: string, value: number) =>
    `${field} cannot exceed ${value}`,
  INVALID_FORMAT: (field: string) => `Invalid ${field} format`,
};

const validationUtils = {
  EMAIL_REGEX,
  PHONE_REGEX,
  PASSWORD_REGEXES,
  ADDRESS_REGEXES,
  BUSINESS_REGEXES,
  NUMBER_REGEXES,
  COUNTRY_CONFIGS,
  getZipCodeConfig,
  validateZipCode,
  validateEmail,
  validatePhone,
  formatCurrency,
  parseCurrency,
  validateDecimal,
  calculatePercentage,
  calculateAmountFromPercentage,
  sanitizeDomainName,
  truncate,
  ERROR_MESSAGES,
};

export default validationUtils;
