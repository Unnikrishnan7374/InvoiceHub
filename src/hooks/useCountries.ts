import { useState, useEffect } from 'react';
import api from '../services/api';

export interface Country {
    id: number;
    name: string;
    code?: string;
    isActive: boolean;
}

let countriesCache: Country[] | null = null;
let countriesCachePromise: Promise<Country[]> | null = null;

const fetchCountriesFromAPI = async (): Promise<Country[]> => {
    if (countriesCache) {
        return countriesCache;
    }

    if (countriesCachePromise) {
        return countriesCachePromise;
    }

    countriesCachePromise = api.get<Country[]>('/api/business/countries')
        .then(response => {
            countriesCache = response.data;
            countriesCachePromise = null;
            return response.data;
        })
        .catch(err => {
            countriesCachePromise = null;
            throw err;
        });

    return countriesCachePromise;
};

export const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>(countriesCache || []);
    const [loading, setLoading] = useState<boolean>(!countriesCache);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (countriesCache) {
            setCountries(countriesCache);
            setLoading(false);
            return;
        }

        const fetchCountries = async () => {
            try {
                setLoading(true);
                const data = await fetchCountriesFromAPI();
                setCountries(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching countries:', err);
                setError('Failed to load countries');
                setCountries([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    return { countries, loading, error };
};
