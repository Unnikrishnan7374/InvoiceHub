import React, { useState, useEffect } from 'react';

interface USPhoneInputProps {
    id?: string;
    name?: string;
    label?: string;
    value: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
    placeholder?: string;
    required?: boolean;
    invalid?: boolean;
    feedback?: string;
    disabled?: boolean;
    className?: string;
}

const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    const limited = cleaned.substring(0, 10);
    const match = limited.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return value;
    if (!match[2]) {
        return match[1];
    }
    if (!match[3]) {
        return `(${match[1]}) ${match[2]}`;
    }
    return `(${match[1]}) ${match[2]}-${match[3]}`;
};

export const getPhoneDigits = (formattedPhone: string): string => {
    return formattedPhone.replace(/\D/g, '');
};

const USPhoneInput: React.FC<USPhoneInputProps> = ({
    id = 'phoneNumber',
    name = 'phoneNumber',
    label = '',
    value,
    onChange,
    onBlur,
    placeholder = '(123) 456-7890',
    required = false,
    invalid = false,
    feedback,
    disabled = false,
    className = ''
}) => {
    const [displayValue, setDisplayValue] = useState<string>('');

    useEffect(() => {
        if (value) {
            const formatted = value.includes('(') ? value : formatPhoneNumber(value);
            setDisplayValue(formatted);
        } else {
            setDisplayValue('');
        }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue.length < displayValue.length) {
            const formatted = formatPhoneNumber(inputValue);
            setDisplayValue(formatted);
            onChange(formatted);
            return;
        }
        const formatted = formatPhoneNumber(inputValue);
        setDisplayValue(formatted);
        onChange(formatted);
    };

    return (
        <div>
            {label && (
                <label htmlFor={id} className="form-label fw-medium">
                    {label}
                    {required && <span className="text-danger"> *</span>}
                </label>
            )}
            <input
                type="text"
                id={id}
                name={name}
                className={`${className} form-control ${invalid ? 'is-invalid' : ''}`}
                value={displayValue}
                onChange={handleChange}
                onBlur={onBlur}
                placeholder={placeholder}
                disabled={disabled}
                maxLength={14}
            />
            {feedback && invalid && (
                <div className="invalid-feedback d-block">{feedback}</div>
            )}
        </div>
    );
};

export default USPhoneInput;
