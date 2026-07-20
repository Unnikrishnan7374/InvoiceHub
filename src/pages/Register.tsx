import React, { useState } from "react";
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Check, AlertCircle, Eye, EyeOff } from "lucide-react";
import USPhoneInput, { getPhoneDigits } from "../components/common/USPhoneInput";
import { businessOnboardingSchema } from "../schemas/BusinessOnboarding";
import PasswordStrengthIndicator from "../components/common/PasswordStrengthIndicator";
import CountrySelect from "../components/common/CountrySelect";
import StateSelect from "../components/common/StateSelect";
import AddressAutocomplete from "../components/common/AddressAutocomplete";
import { sanitizeDomainName } from "../utils/validationUtils";
import { useCountries } from "../hooks/useCountries";
import config from "../config";
import '../css/scss/Register.scss';

// Define the registration steps
const steps = ['Business Details', 'Administrator Info'];

// Define form type to match the form fields
type FormValues = {
  businessName: string;
  businessCode: string;
  domainName: string;
  email: string;
  address: string;
  city: string;
  state: number | null;
  zip: string;
  country: number | null;
  fullName: string;
  emailUser: string;
  userPhone?: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  useDocumentTitle('Register');
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const isPhoneValid = getPhoneDigits(phoneNumber).length === 10;
  const [selectedCountryId, setSelectedCountryId] = useState<number | undefined>(undefined);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | undefined>(undefined);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { countries } = useCountries();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    trigger,
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(businessOnboardingSchema) as any,
    mode: "onTouched",
  });

  const businessName = watch("businessName");
  const password = watch("password");

  // Auto-generate domain name from business name using sanitization utility
  React.useEffect(() => {
    if (businessName && !touchedFields.domainName) {
      const domain = sanitizeDomainName(businessName).substring(0, 30);
      setValue("domainName", domain, { shouldValidate: false });
    }
  }, [businessName, touchedFields.domainName, setValue]);

  const nextStep = async () => {
    const step1Fields: (keyof FormValues)[] = [
      "businessName",
      "businessCode",
      "domainName",
      "email",
      "address",
      "city",
      "state",
      "zip",
      "country",
    ];

    const isValid = await trigger(step1Fields);

    // Debug: Log validation status
    console.log("Step 1 Validation:", isValid);
    console.log("Form Errors:", errors);
    console.log("Form Values:", watch());

    if (isValid) {
      setStep(2);
    } else {
      // Scroll to first error
      const firstErrorField = step1Fields.find(field => errors[field]);
      if (firstErrorField) {
        console.log("First error field:", firstErrorField, errors[firstErrorField]);
      }
    }
  };

  const prevStep = () => {
    setStep(1);
    setSubmitStatus(null);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Form data before payload:", data); // Debug log
      console.log("State value:", data.state, "Type:", typeof data.state); // Debug state specifically
      console.log("Country value:", data.country, "Type:", typeof data.country); // Debug country specifically

      if (!data.state || !data.country) {
        console.error("State or Country is missing!", { state: data.state, country: data.country });
      }

      // Match DTO property names exactly (PascalCase for C# backend)
      const payload = {
        BusinessName: data.businessName,
        BusinessCode: data.businessCode,
        DomainName: data.domainName,
        Email: data.email,
        Address: data.address,
        City: data.city,
        State: data.state ? Number(data.state) : null,
        Zip: data.zip,
        Country: data.country ? Number(data.country) : null,
        CountryCode: selectedCountryCode || null, // Send country code
        FullName: data.fullName,
        EmailUser: data.emailUser,
        UserPhone: phoneNumber || null, // Send null if empty
        Password: data.password,
        ConfirmPassword: data.confirmPassword,
        BusinessPhone: null, // Not collected in form, send null
        IsAddressValidated: false,
        IndustryType: null,
        Currency: null
      };

      console.log("Sending payload:", payload); // Debug log
      const baseURL = config.api.API_URL;
      const response = await fetch(`${baseURL}/api/auth/register-business`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          success: true,
          message: result.message || "Business registered successfully! Check your email for verification.",
        });
      } else {
        let errorMessage = "Registration failed. Please try again.";

        if (result.errors) {
          const errorMessages = Object.entries(result.errors)
            .map(([field, messages]) => `${field}: ${(messages as string[]).join(", ")}`)
            .join("\n");
          errorMessage = errorMessages;
        } else if (result.message) {
          errorMessage = result.message;
        }

        setSubmitStatus({
          success: false,
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      setSubmitStatus({
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const pageVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const successVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    },
  };

  return (
    <div>
      {/* Scroll-sticky Breadcrumb Banner */}
      <section className="dtlsban dtlsban-hide-banner clearfix">
        <div className="dtlstext">
          <ul className="tabs nav nav-tabs clearfix">
            <li>
              <Link to="/">
                <span className="material-symbols-outlined">home</span>
              </Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Register Content */}
      <section className="login-page-section register-page-section">
        <div className="login-page-container">

          {/* Left Panel: Form */}
          <div className="login-form-panel">
            <div className="register-form-card">
              <div className="text-center mb-4">
                <h2 className="home-section-title mb-3" style={{ color: "#1a73e8" }}>Create Your <span>Business</span></h2>
                <div className="custom-pill-stepper mb-4">
                  {steps.map((label, idx) => {
                    const stepNum = idx + 1;
                    const isActive = step === stepNum;
                    const isCompleted = step > stepNum;

                    return (
                      <React.Fragment key={label}>
                        {idx > 0 && (
                          <div className={`step-connector ${step >= stepNum ? 'active' : ''}`} />
                        )}
                        <div className={`step-pill ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                          {stepNum}. {label}
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!submitStatus && !isSubmitting && (
                  <motion.div
                    key={`step-${step}`}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      {step === 1 && (
                        <>
                          <div className="register-grid">
                            <div className="mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  Business Name <span className="text-danger">*</span>
                                </label>
                                {watch("businessName") && !errors.businessName && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <input
                                {...register("businessName")}
                                type="text"
                                className={`form-control ${errors.businessName ? 'is-invalid' : ''}`}
                                placeholder="Adisys Corporation"
                              />
                              {errors.businessName && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.businessName.message}</span>
                                </div>
                              )}
                            </div>

                            <div className="mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  Business Code <span className="text-danger">*</span>
                                </label>
                                {watch("businessCode") && !errors.businessCode && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <input
                                {...register("businessCode")}
                                type="text"
                                className={`form-control ${errors.businessCode ? 'is-invalid' : ''}`}
                                placeholder="e.g. ADISYS001"
                              />
                              {errors.businessCode && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.businessCode.message}</span>
                                </div>
                              )}
                            </div>

                            <div className="mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  Sub Domain Name <span className="text-danger">*</span>
                                </label>
                                {watch("domainName") && !errors.domainName && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <div className="input-group">
                                <input
                                  {...register("domainName")}
                                  type="text"
                                  className={`form-control ${errors.domainName ? 'is-invalid' : ''}`}
                                  placeholder="adisys"
                                />
                                <span className="input-group-text bg-light text-muted">
                                  .invoicehub360.com
                                </span>
                              </div>
                              {errors.domainName && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.domainName.message}</span>
                                </div>
                              )}
                            </div>

                            <div className="mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  Business Email <span className="text-danger">*</span>
                                </label>
                                {watch("email") && !errors.email && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <input
                                {...register("email")}
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="contact@adisys.com"
                              />
                              {errors.email && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.email.message}</span>
                                </div>
                              )}
                            </div>

                            <div className="mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  Country <span className="text-danger">*</span>
                                </label>
                                {watch("country") && !errors.country && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <CountrySelect
                                label=""
                                value={watch("country") || null}
                                onChange={(countryId, countryName, countryCode) => {
                                  setValue("country", countryId, { shouldValidate: true, shouldTouch: true });
                                  setSelectedCountryId(countryId || undefined);
                                  setSelectedCountryCode(countryCode);
                                  setValue("state", null, { shouldValidate: false });
                                }}
                                invalid={!!errors.country}
                                required
                              />
                              {errors.country && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.country.message}</span>
                                </div>
                              )}
                            </div>

                            <div className="mb-3">
                              <AddressAutocomplete
                                label="Business Address"
                                value={watch("address") || ""}
                                onChange={(value) => setValue("address", value, { shouldValidate: false })}
                                onAddressSelect={(data) => {
                                  setValue("address", data.Address, { shouldValidate: true, shouldTouch: true });
                                  setValue("city", data.City, { shouldValidate: true, shouldTouch: true });
                                  setValue("zip", data.Zip, { shouldValidate: true, shouldTouch: true });
                                }}
                                invalid={!!errors.address}
                              />
                              {errors.address && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.address.message}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-4 mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  City <span className="text-danger">*</span>
                                </label>
                                {watch("city") && !errors.city && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <input
                                {...register("city")}
                                type="text"
                                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                                placeholder="City"
                              />
                              {errors.city && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.city.message}</span>
                                </div>
                              )}
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  State <span className="text-danger">*</span>
                                </label>
                                {watch("state") && !errors.state && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <StateSelect
                                name="state"
                                label=""
                                value={watch("state") || null}
                                countryId={selectedCountryId}
                                onChange={(stateId, stateName, stateCode) => {
                                  setValue("state", stateId, { shouldValidate: true, shouldTouch: true });
                                }}
                                placeholder="State"
                                required
                                invalid={!!errors.state}
                              />
                              {errors.state && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.state.message}</span>
                                </div>
                              )}
                            </div>
                            <div className="col-md-4 mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  Postal Code <span className="text-danger">*</span>
                                </label>
                                {watch("zip") && !errors.zip && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <input
                                {...register("zip")}
                                type="text"
                                className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
                                placeholder="Postal Code"
                              />
                              {errors.zip && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.zip.message}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="d-flex justify-content-between align-items-center mt-4 register-bottom-actions">
                            <p className="login-header-signup-link text-start mb-0">
                              Already have an account? <Link to="/login">Login</Link>
                            </p>
                            <button
                              type="button"
                              className="btn px-5 py-2 fw-semibold next-btn"
                              onClick={nextStep}
                            >
                              Next <i className="ri-arrow-right-line ms-1"></i>
                            </button>
                          </div>
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <div className="mb-3">
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <label className="form-label fw-medium mb-0">
                                Full Name <span className="text-danger">*</span>
                              </label>
                              {watch("fullName") && !errors.fullName && (
                                <Check size={16} className="text-success" />
                              )}
                            </div>
                            <input
                              {...register("fullName")}
                              type="text"
                              className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                              placeholder="John Doe"
                            />
                            {errors.fullName && (
                              <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                <AlertCircle size={14} />
                                <span>{errors.fullName.message}</span>
                              </div>
                            )}
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  Email <span className="text-danger">*</span>
                                </label>
                                {watch("emailUser") && !errors.emailUser && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <input
                                {...register("emailUser")}
                                type="email"
                                className={`form-control ${errors.emailUser ? 'is-invalid' : ''}`}
                                placeholder="john@adisys.com"
                              />
                              {errors.emailUser && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.emailUser.message}</span>
                                </div>
                              )}
                            </div>

                            <div className="col-md-6 mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  Phone
                                </label>
                                {phoneNumber && isPhoneValid && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <USPhoneInput
                                value={phoneNumber}
                                onChange={(value) => setPhoneNumber(value)}
                                className="form-control"
                                placeholder="(555) 123-4567"
                              />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  Password <span className="text-danger">*</span>
                                </label>
                                {watch("password") && !errors.password && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <div className="position-relative">
                                <input
                                  {...register("password")}
                                  type={showPassword ? "text" : "password"}
                                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                  placeholder="••••••••"
                                  style={{ paddingRight: "45px" }}
                                />
                                <button
                                  type="button"
                                  className="btn border-0 p-0 position-absolute"
                                  onClick={() => setShowPassword(!showPassword)}
                                  style={{
                                    right: "15px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    zIndex: 10,
                                    background: "none",
                                    color: "#666666",
                                    display: "flex",
                                    alignItems: "center"
                                  }}
                                >
                                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                              </div>
                              {errors.password && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.password.message}</span>
                                </div>
                              )}
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="d-flex align-items-center gap-2 mb-2">
                                <label className="form-label fw-medium mb-0">
                                  Confirm Password <span className="text-danger">*</span>
                                </label>
                                {watch("confirmPassword") && !errors.confirmPassword && (
                                  <Check size={16} className="text-success" />
                                )}
                              </div>
                              <div className="position-relative">
                                <input
                                  {...register("confirmPassword")}
                                  type={showConfirmPassword ? "text" : "password"}
                                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                  placeholder="••••••••"
                                  style={{ paddingRight: "45px" }}
                                />
                                <button
                                  type="button"
                                  className="btn border-0 p-0 position-absolute"
                                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                  style={{
                                    right: "15px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    zIndex: 10,
                                    background: "none",
                                    color: "#666666",
                                    display: "flex",
                                    alignItems: "center"
                                  }}
                                >
                                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                              </div>
                              {errors.confirmPassword && (
                                <div className="text-danger small mt-1 d-flex align-items-center gap-1">
                                  <AlertCircle size={14} />
                                  <span>{errors.confirmPassword.message}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <PasswordStrengthIndicator password={password || ""} showRequirements={true} />

                          <div className="d-flex justify-content-between align-items-center mt-4 register-bottom-actions">
                            <p className="login-header-signup-link text-start mb-0">
                              Already have an account? <Link to="/login">Login</Link>
                            </p>
                            <div className="d-flex gap-2" style={{ gap: "10px" }}>
                              <button
                                type="button"
                                className="btn btn-light px-4 py-2 m fw-semibold back-btn"
                                onClick={prevStep}
                              >
                                <i className="ri-arrow-left-line me-1"></i> Back
                              </button>
                              <button
                                type="button"
                                className="btn px-4 py-2 fw-semibold submit-btn"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleSubmit(onSubmit)();
                                }}
                              >
                                Create Business <i className="ri-check-line ms-1"></i>
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}

                {isSubmitting && (
                  <motion.div
                    key="loading"
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-center py-5"
                  >
                    <div className="spinner-border" style={{ width: "3rem", height: "3rem", color: "#1a73e8" }} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <h5 className="mt-4" style={{ color: "#1a73e8" }}>Creating your business...</h5>
                    <p className="text-muted">Please wait while we set up your account</p>
                  </motion.div>
                )}

                {submitStatus && (
                  <motion.div
                    key="result"
                    variants={successVariants}
                    initial="initial"
                    animate="animate"
                    className="text-center py-5"
                  >
                    {submitStatus.success ? (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" as const, stiffness: 200 }}
                        >
                          <div
                            className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                            style={{ width: "80px", height: "80px", backgroundColor: "#1a73e8" }}
                          >
                            <Check size={48} color="white" />
                          </div>
                        </motion.div>
                        <h4 className="mb-3" style={{ color: "#1a73e8" }}>Success!</h4>
                        <div className="alert alert-success text-start">
                          {submitStatus.message}
                        </div>
                        <button
                          className="btn mt-3 px-4"
                          style={{
                            backgroundColor: "#1a73e8",
                            color: "white",
                            border: "none"
                          }}
                          onClick={() => window.location.reload()}
                        >
                          Create Another Business
                        </button>
                      </>
                    ) : (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" as const, stiffness: 200 }}
                        >
                          <div
                            className="bg-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                            style={{ width: "80px", height: "80px" }}
                          >
                            <AlertCircle size={48} color="white" />
                          </div>
                        </motion.div>
                        <h4 className="text-danger mb-3">Registration Failed</h4>
                        <div className="alert alert-danger text-start" style={{ whiteSpace: "pre-line" }}>
                          {submitStatus.message}
                        </div>
                         <button
                           className="btn mt-3 px-4"
                           style={{
                             backgroundColor: "#1a73e8",
                             color: "white",
                             border: "none"
                           }}
                           onClick={() => setSubmitStatus(null)}
                         >
                           Try Again
                         </button>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
