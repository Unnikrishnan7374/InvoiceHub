import React, { useMemo } from 'react';
import Select from 'react-select';
import { useCountries } from '../../hooks/useCountries';

interface CountrySelectProps {
    id?: string;
    name?: string;
    label?: string;
    value: number | string | null;
    onChange: (countryId: number | null, countryName?: string, countryCode?: string) => void;
    onBlur?: () => void;
    placeholder?: string;
    required?: boolean;
    invalid?: boolean;
    feedback?: string;
    disabled?: boolean;
    className?: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
    id = 'country-field',
    name = 'country',
    label = 'Country',
    value,
    onChange,
    onBlur,
    placeholder = 'Select Country',
    required = false,
    invalid = false,
    feedback,
    disabled = false,
    className = ''
}) => {
    const { countries, loading } = useCountries();

    const countryOptions = useMemo(() =>
        countries.map(country => ({
            value: country.id,
            label: country.name,
            code: country.code
        }))
    , [countries]);

    const selectedOption = countryOptions.find(opt =>
        opt.value === value || opt.label === value
    );

    const handleChange = (option: any) => {
        if (option) {
            onChange(option.value, option.label, option.code);
        } else {
            onChange(null, '', '');
        }
    };

    return (
        <div className={className}>
            {label && (
                <label htmlFor={id} className="form-label fw-medium">
                    {label} {required && <span className="text-danger">*</span>}
                </label>
            )}
            <Select
                id={id}
                name={name}
                value={selectedOption}
                onChange={handleChange}
                onBlur={onBlur}
                options={countryOptions}
                classNamePrefix="select"
                placeholder={placeholder}
                isLoading={loading}
                isDisabled={disabled}
                isClearable
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        borderColor: invalid ? '#dc3545' : provided.borderColor,
                        '&:hover': {
                            borderColor: invalid ? '#dc3545' : provided.borderColor,
                        }
                    })
                }}
            />
            {invalid && feedback && (
                <div className="invalid-feedback d-block mt-1">
                    {feedback}
                </div>
            )}
        </div>
    );
};

export default CountrySelect;
