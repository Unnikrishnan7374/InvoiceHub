import * as Yup from "yup";

const UPPERCASE_REGEX = /[A-Z]/;
const LOWERCASE_REGEX = /[a-z]/;
const NUMBER_REGEX = /[0-9]/;
const SPECIAL_CHAR_REGEX = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

export const checkPasswordStrength = (password: string): 'weak' | 'medium' | 'strong' => {
  if (!password) return 'weak';

  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;

  if (UPPERCASE_REGEX.test(password)) strength++;
  if (LOWERCASE_REGEX.test(password)) strength++;
  if (NUMBER_REGEX.test(password)) strength++;
  if (SPECIAL_CHAR_REGEX.test(password)) strength++;

  if (strength <= 2) return 'weak';
  if (strength <= 4) return 'medium';
  return 'strong';
};

export const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(UPPERCASE_REGEX, "Password must contain at least one uppercase letter")
    .matches(LOWERCASE_REGEX, "Password must contain at least one lowercase letter")
    .matches(NUMBER_REGEX, "Password must contain at least one number")
    .matches(SPECIAL_CHAR_REGEX, "Password must contain at least one special character"),

  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const CITY_REGEX = /^[a-zA-Z\s]+$/;
const STATE_REGEX = /^[a-zA-Z\s]+$/;
const US_ZIP_REGEX = /^\d{5}(-\d{4})?$/;
const INDIA_ZIP_REGEX = /^\d{6}$/;
const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i;

export const addressSchema = Yup.object().shape({
  country: Yup.number()
    .required("Country is required")
    .nullable(),

  state: Yup.number()
    .required("State is required")
    .nullable(),

  city: Yup.string()
    .required("City is required")
    .matches(CITY_REGEX, "City should only contain letters and spaces")
    .max(100, "City name cannot exceed 100 characters"),

  address: Yup.string()
    .required("Address is required")
    .trim()
    .min(5, "Address must be at least 5 characters long")
    .max(200, "Address cannot exceed 200 characters"),

  zip: Yup.string()
    .required("ZIP code is required")
    .test(
      "valid-zip-format",
      "Invalid ZIP code format for selected country",
      function (value) {
        const { country } = this.parent;
        if (!value) return false;

        switch (country) {
          case "USA":
            return US_ZIP_REGEX.test(value);
          case "India":
            return INDIA_ZIP_REGEX.test(value);
          case "UK":
            return UK_POSTCODE_REGEX.test(value);
          default:
            return true;
        }
      }
    ),
});

export const businessInfoSchema = Yup.object().shape({
  businessName: Yup.string()
    .required("Business name is required")
    .trim()
    .min(2, "Business name must be at least 2 characters long")
    .max(100, "Business name cannot exceed 100 characters"),

  domainName: Yup.string()
    .required("Domain name is required")
    .matches(
      /^[a-z0-9-]+$/,
      "Domain name can only contain lowercase letters, numbers, and hyphens"
    )
    .min(3, "Domain name must be at least 3 characters long")
    .max(30, "Domain name cannot exceed 30 characters"),

  email: Yup.string()
    .required("Business email is required")
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters"),
});

export const userInfoSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .trim()
    .min(2, "Full name must be at least 2 characters long")
    .max(100, "Full name cannot exceed 100 characters")
    .matches(/^[a-zA-Z\s]+$/, "Full name should only contain letters and spaces"),

  emailUser: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters"),

  userPhone: Yup.string().notRequired(),
});

export const businessOnboardingSchema = Yup.object({
  businessName: Yup.string()
    .required("Business name is required")
    .trim()
    .min(2, "Business name must be at least 2 characters long")
    .max(100, "Business name cannot exceed 100 characters"),

  domainName: Yup.string()
    .required("Domain name is required")
    .matches(
      /^[a-z0-9-]+$/,
      "Domain name can only contain lowercase letters, numbers, and hyphens"
    )
    .min(3, "Domain name must be at least 3 characters long")
    .max(30, "Domain name cannot exceed 30 characters"),

  email: Yup.string()
    .required("Business email is required")
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters"),

  country: Yup.number()
    .required("Country is required")
    .nullable(),

  state: Yup.number()
    .required("State is required")
    .nullable(),

  city: Yup.string()
    .required("City is required")
    .matches(CITY_REGEX, "City should only contain letters and spaces")
    .max(100, "City name cannot exceed 100 characters"),

  address: Yup.string()
    .required("Address is required")
    .trim()
    .min(5, "Address must be at least 5 characters long")
    .max(200, "Address cannot exceed 200 characters"),

  zip: Yup.string()
    .required("ZIP code is required")
    .test(
      "valid-zip-format",
      "Invalid ZIP code format for selected country",
      function (value) {
        const { country } = this.parent;
        if (!value) return false;

        switch (country) {
          case "USA":
            return US_ZIP_REGEX.test(value);
          case "India":
            return INDIA_ZIP_REGEX.test(value);
          case "UK":
            return UK_POSTCODE_REGEX.test(value);
          default:
            return true;
        }
      }
    ),

  fullName: Yup.string()
    .required("Full name is required")
    .trim()
    .min(2, "Full name must be at least 2 characters long")
    .max(100, "Full name cannot exceed 100 characters")
    .matches(/^[a-zA-Z\s]+$/, "Full name should only contain letters and spaces"),

  emailUser: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters"),

  userPhone: Yup.string().notRequired(),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(UPPERCASE_REGEX, "Password must contain at least one uppercase letter")
    .matches(LOWERCASE_REGEX, "Password must contain at least one lowercase letter")
    .matches(NUMBER_REGEX, "Password must contain at least one number")
    .matches(SPECIAL_CHAR_REGEX, "Password must contain at least one special character"),

  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const step1Schema = Yup.object({
  businessName: Yup.string()
    .required("Business name is required")
    .trim()
    .min(2, "Business name must be at least 2 characters long")
    .max(100, "Business name cannot exceed 100 characters"),

  domainName: Yup.string()
    .required("Domain name is required")
    .matches(
      /^[a-z0-9-]+$/,
      "Domain name can only contain lowercase letters, numbers, and hyphens"
    )
    .min(3, "Domain name must be at least 3 characters long")
    .max(30, "Domain name cannot exceed 30 characters"),

  email: Yup.string()
    .required("Business email is required")
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters"),

  country: Yup.number()
    .required("Country is required")
    .nullable(),

  state: Yup.number()
    .required("State is required")
    .nullable(),

  city: Yup.string()
    .required("City is required")
    .matches(CITY_REGEX, "City should only contain letters and spaces")
    .max(100, "City name cannot exceed 100 characters"),

  address: Yup.string()
    .required("Address is required")
    .trim()
    .min(5, "Address must be at least 5 characters long")
    .max(200, "Address cannot exceed 200 characters"),

  zip: Yup.string()
    .required("ZIP code is required")
    .test(
      "valid-zip-format",
      "Invalid ZIP code format for selected country",
      function (value) {
        const { country } = this.parent;
        if (!value) return false;

        switch (country) {
          case "USA":
            return US_ZIP_REGEX.test(value);
          case "India":
            return INDIA_ZIP_REGEX.test(value);
          case "UK":
            return UK_POSTCODE_REGEX.test(value);
          default:
            return true;
        }
      }
    ),
});

export const step2Schema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .trim()
    .min(2, "Full name must be at least 2 characters long")
    .max(100, "Full name cannot exceed 100 characters")
    .matches(/^[a-zA-Z\s]+$/, "Full name should only contain letters and spaces"),

  emailUser: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email cannot exceed 100 characters"),

  userPhone: Yup.string().notRequired(),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(UPPERCASE_REGEX, "Password must contain at least one uppercase letter")
    .matches(LOWERCASE_REGEX, "Password must contain at least one lowercase letter")
    .matches(NUMBER_REGEX, "Password must contain at least one number")
    .matches(SPECIAL_CHAR_REGEX, "Password must contain at least one special character"),

  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export type PasswordFormData = Yup.InferType<typeof passwordSchema>;
export type AddressFormData = Yup.InferType<typeof addressSchema>;
export type BusinessInfoFormData = Yup.InferType<typeof businessInfoSchema>;
export type UserInfoFormData = Yup.InferType<typeof userInfoSchema>;
export type BusinessOnboardingFormData = Yup.InferType<typeof businessOnboardingSchema>;
export type Step1FormData = Yup.InferType<typeof step1Schema>;
export type Step2FormData = Yup.InferType<typeof step2Schema>;
