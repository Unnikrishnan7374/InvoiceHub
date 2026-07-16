import React, { useEffect, useRef, useState, useCallback } from 'react';
import api from '../../services/api';

interface AddressData {
    Address: string;
    City: string;
    State: string;
    Zip: string;
    Country: string;
}

interface AddressAutocompleteProps {
    id?: string;
    value: string;
    onChange: (value: string) => void;
    onAddressSelect: (data: AddressData) => void;
    onValidationChange?: (isValidated: boolean) => void;
    label?: string;
    invalid?: boolean;
    feedback?: string;
    disabled?: boolean;
}

enum ValidationState {
    Unverified = 'unverified',
    Validating = 'validating',
    Verified = 'verified',
    Invalid = 'invalid'
}

interface USPSValidationResult {
    isValid: boolean;
    validatedAddress?: {
        address: string;
        city: string;
        state: string;
        zip: string;
    };
}

const AZURE_MAPS_KEY = import.meta.env.VITE_AZURE_MAPS_KEY || "";

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
    id = 'addressInput',
    value,
    onChange,
    onAddressSelect,
    onValidationChange,
    label,
    invalid,
    feedback,
    disabled = false
}) => {

    const [suggestions, setSuggestions] = useState<AddressData[]>([]);
    const [loadingSuggestions, setLoadingSuggestions] = useState(false);
    const [validationState, setValidationState] = useState<ValidationState>(ValidationState.Unverified);
    const [isValidating, setIsValidating] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
                inputRef.current && !inputRef.current.contains(e.target as Node)
            ) {
                setShowSuggestions(false);
                setHighlightedIndex(-1);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!showSuggestions || suggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedIndex(prev => (prev + 1) % suggestions.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
        } else if (e.key === 'Enter' && highlightedIndex >= 0) {
            e.preventDefault();
            handleSelect(suggestions[highlightedIndex]);
        } else if (e.key === 'Escape') {
            setShowSuggestions(false);
            setHighlightedIndex(-1);
        }
    };

    const fetchSuggestions = useCallback(async (query: string) => {
        if (!query || query.length < 3) {
            setSuggestions([]);
            setLoadingSuggestions(false);
            setShowSuggestions(false);
            return;
        }

        setLoadingSuggestions(true);
        setShowSuggestions(true);

        try {
            const response = await fetch(
                `https://atlas.microsoft.com/search/fuzzy/json?api-version=1.0&subscription-key=${encodeURIComponent(AZURE_MAPS_KEY)}&query=${encodeURIComponent(query)}&limit=5`
            );

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const data = await response.json();

            const results: AddressData[] =
                data.results?.slice(0, 5).map((result: any) => {
                    const a = result.address || {};

                    return {
                        Address: a.freeformAddress || '',
                        City: a.municipality || '',
                        State: a.countrySubdivisionCode || a.countrySubdivision || '',
                        Zip: a.postalCode?.split('-')[0] || '',
                        Country: a.country || 'United States'
                    };
                }).filter((r: AddressData) => r.Address) || [];

            setSuggestions(results);
            setHighlightedIndex(-1);

        } catch (error) {
            console.error("Azure Maps error:", error);
            setSuggestions([]);
        } finally {
            setLoadingSuggestions(false);
        }
    }, []);

    const validateWithUSPS = useCallback(
        async (address: string, city: string, state: string, zip: string, country?: string) => {
            if (country && country !== "United States") {
                setValidationState(ValidationState.Unverified);
                onValidationChange?.(true);
                return;
            }

            if (!address.trim()) {
                setValidationState(ValidationState.Unverified);
                return;
            }

            setValidationState(ValidationState.Validating);
            setIsValidating(true);

            try {
                const response = await api.post<USPSValidationResult>(
                    'api/USPSAddressValidation/uspsaddressvalidation',
                    { address, city, state, zip }
                );

                if (response.data.isValid) {
                    setValidationState(ValidationState.Verified);
                    onValidationChange?.(true);

                    if (response.data.validatedAddress) {
                        onAddressSelect({
                            Address: address,
                            City: response.data.validatedAddress.city,
                            State: response.data.validatedAddress.state,
                            Zip: response.data.validatedAddress.zip,
                            Country: "United States"
                        });
                    }
                } else {
                    setValidationState(ValidationState.Invalid);
                    onValidationChange?.(false);
                }
            } catch (error) {
                console.error("USPS validation failed:", error);
                setValidationState(ValidationState.Unverified);
                onValidationChange?.(false);
            } finally {
                setIsValidating(false);
            }
        },
        [onAddressSelect, onValidationChange]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        onChange(val);
        setValidationState(ValidationState.Unverified);
        onValidationChange?.(false);
        setHighlightedIndex(-1);

        if (debounceRef.current) clearTimeout(debounceRef.current);

        if (val.length >= 3) {
            debounceRef.current = setTimeout(() => {
                fetchSuggestions(val);
            }, 300);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSelect = (data: AddressData) => {
        onChange(data.Address);
        onAddressSelect(data);
        setSuggestions([]);
        setShowSuggestions(false);
        setHighlightedIndex(-1);

        setTimeout(() => {
            validateWithUSPS(
                data.Address,
                data.City,
                data.State,
                data.Zip,
                data.Country
            );
        }, 300);
    };

    useEffect(() => {
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, []);

    const getBadgeInfo = () => {
        switch (validationState) {
            case ValidationState.Verified:
                return { text: 'USPS Verified', color: 'bg-success' };
            case ValidationState.Validating:
                return { text: 'Checking…', color: 'bg-info' };
            case ValidationState.Invalid:
                return { text: 'Invalid Address', color: 'bg-warning' };
            default:
                return { text: 'Unverified', color: 'bg-secondary' };
        }
    };

    const { text: badgeText, color: badgeColor } = getBadgeInfo();

    return (
        <div className="form-group position-relative mb-3">
            {label && (
                <div className="d-flex align-items-center gap-2 mb-2">
                    <label className="form-label fw-medium mb-0">{label}</label>
                    {value && value.trim() !== '' && (
                        <span
                            className={`badge rounded-pill ${badgeColor} text-white`}
                            style={{
                                fontSize: '0.75rem',
                                padding: '0.25rem 0.6rem',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {validationState === ValidationState.Validating && (
                                <i className="fas fa-spinner fa-spin me-1"></i>
                            )}
                            {badgeText}
                        </span>
                    )}
                </div>
            )}

            <div className="position-relative address-autocomplete-wrapper">
                <input
                    ref={inputRef}
                    type="text"
                    id={id}
                    className={`form-control ${invalid ? 'is-invalid' : ''}`}
                    value={value}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                    placeholder="Enter address"
                    disabled={disabled || isValidating}
                    autoComplete="off"
                />

                {showSuggestions && (
                    <div
                        ref={dropdownRef}
                        className="address-suggestions-dropdown"
                    >
                        {loadingSuggestions ? (
                            [...Array(3)].map((_, i) => (
                                <div key={i} className="px-3 py-2 border-bottom">
                                    <div className="skeleton-line mb-1" style={{ width: '90%', height: '14px', backgroundColor: '#e9ecef' }}></div>
                                    <div className="skeleton-line" style={{ width: '60%', height: '12px', backgroundColor: '#e9ecef' }}></div>
                                </div>
                            ))
                        ) : suggestions.length > 0 ? (
                            suggestions.map((s, idx) => (
                                <div
                                    key={idx}
                                    className={`suggestion-item ${highlightedIndex === idx ? 'active' : ''}`}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        handleSelect(s);
                                    }}
                                    onMouseEnter={() => setHighlightedIndex(idx)}
                                >
                                    <div className="suggestion-address">{s.Address}</div>
                                    <div className="suggestion-details">
                                        {s.City}, {s.State} {s.Zip}, {s.Country}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-suggestions">
                                No suggestions found
                            </div>
                        )}
                    </div>
                )}
            </div>

            {feedback && invalid && <div className="invalid-feedback d-block mt-1">{feedback}</div>}
        </div>
    );
};

export default AddressAutocomplete;
