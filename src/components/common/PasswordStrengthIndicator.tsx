import React from 'react';
import { checkPasswordStrength } from '../../schemas/BusinessOnboarding';

interface PasswordStrengthIndicatorProps {
  password: string;
  showRequirements?: boolean;
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
  showRequirements = true,
}) => {
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  const strength = checkPasswordStrength(password);

  const strengthConfig = {
    weak: {
      color: '#dc3545',
      bgColor: '#f8d7da',
      textColor: '#721c24',
      label: 'Weak',
      width: '33%',
    },
    medium: {
      color: '#ffc107',
      bgColor: '#fff3cd',
      textColor: '#856404',
      label: 'Medium',
      width: '66%',
    },
    strong: {
      color: '#28a745',
      bgColor: '#d4edda',
      textColor: '#155724',
      label: 'Strong',
      width: '100%',
    },
  };

  const currentStrength = strengthConfig[strength];

  if (!password) {
    return null;
  }

  return (
    <div className="mt-3">
      <div className="mb-2">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <small className="text-muted">Password Strength:</small>
          <small
            className="fw-medium"
            style={{ color: currentStrength.textColor }}
          >
            {currentStrength.label}
          </small>
        </div>
        <div
          className="progress"
          style={{ height: '6px', backgroundColor: '#e9ecef' }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: currentStrength.width,
              backgroundColor: currentStrength.color,
              transition: 'width 0.3s ease, background-color 0.3s ease',
            }}
            aria-valuenow={
              strength === 'weak' ? 33 : strength === 'medium' ? 66 : 100
            }
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {showRequirements && (
        <div
          className="small p-3 rounded"
          style={{
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
          }}
        >
          <div className="fw-medium mb-2 text-muted">Password Requirements:</div>
          <div className="d-flex flex-column gap-1">
            <RequirementItem met={hasMinLength} text="At least 8 characters" />
            <RequirementItem met={hasUppercase} text="One uppercase letter (A-Z)" />
            <RequirementItem met={hasLowercase} text="One lowercase letter (a-z)" />
            <RequirementItem met={hasNumber} text="One number (0-9)" />
            <RequirementItem met={hasSpecialChar} text="One special character (!@#$%^&*)" />
          </div>
        </div>
      )}
    </div>
  );
};

interface RequirementItemProps {
  met: boolean;
  text: string;
}

const RequirementItem: React.FC<RequirementItemProps> = ({ met, text }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      {met ? (
        <i
          className="ri-check-line"
          style={{ color: '#28a745', fontSize: '16px' }}
        />
      ) : (
        <i
          className="ri-close-line"
          style={{ color: '#dc3545', fontSize: '16px' }}
        />
      )}
      <span
        className="small"
        style={{
          color: met ? '#28a745' : '#6c757d',
          textDecoration: met ? 'line-through' : 'none',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default PasswordStrengthIndicator;
