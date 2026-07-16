import React, { useMemo } from 'react';
import Select from 'react-select';
import { useStates } from '../../hooks/useStates';

interface StateSelectProps {
    id?: string;
    name?: string;
    label?: string;
    value: number | string | null;
    countryId: number | undefined;
    onChange: (stateId: number | null, stateName?: string, stateCode?: string) => void;
    onBlur?: () => void;
    placeholder?: string;
    required?: boolean;
    invalid?: boolean;
    feedback?: string;
    disabled?: boolean;
    className?: string;
}

const StateSelect: React.FC<StateSelectProps> = ({
    id = 'state-field',
    name = 'state',
    label = 'State/Province',
    value,
    countryId,
    onChange,
    onBlur,
    placeholder = 'Select State/Province',
    required = false,
    invalid = false,
    feedback,
    disabled = false,
    className = ''
}) => {
    const { states, loading } = useStates(countryId);

    const stateOptions = useMemo(() =>
        states.map(state => ({
            value: state.stateId,
            label: state.name,
            code: state.code
        }))
    , [states]);

    const selectedOption = stateOptions.find(opt =>
        opt.value === value || opt.label === value || opt.code === value
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
                options={stateOptions}
                classNamePrefix="select"
                placeholder={placeholder}
                isLoading={loading}
                isDisabled={disabled || !countryId}
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

export default StateSelect;
