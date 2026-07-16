import { useState, useEffect } from 'react';
import api from '../services/api';

export interface State {
    stateId: number;
    name: string;
    code?: string;
    countryId: number;
    isActive: boolean;
}

const statesCache: Map<number, State[]> = new Map();
const statesCachePromises: Map<number, Promise<State[]>> = new Map();

const fetchStatesFromAPI = async (countryId: number): Promise<State[]> => {
    if (statesCache.has(countryId)) {
        return statesCache.get(countryId)!;
    }

    if (statesCachePromises.has(countryId)) {
        return statesCachePromises.get(countryId)!;
    }

    const endpoint = countryId === 1
        ? '/api/business/states/usa'
        : `/api/business/states?countryId=${countryId}`;

    const promise = api.get<State[]>(endpoint)
        .then(response => {
            statesCache.set(countryId, response.data);
            statesCachePromises.delete(countryId);
            return response.data;
        })
        .catch(err => {
            statesCachePromises.delete(countryId);
            throw err;
        });

    statesCachePromises.set(countryId, promise);
    return promise;
};

export const useStates = (countryId?: number) => {
    const [states, setStates] = useState<State[]>(
        countryId && statesCache.has(countryId) ? statesCache.get(countryId)! : []
    );
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!countryId) {
            setStates([]);
            setLoading(false);
            return;
        }

        if (statesCache.has(countryId)) {
            setStates(statesCache.get(countryId)!);
            setLoading(false);
            return;
        }

        const fetchStates = async () => {
            try {
                setLoading(true);
                const data = await fetchStatesFromAPI(countryId);
                setStates(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching states:', err);
                setError('Failed to load states');
                setStates([]);
            } finally {
                setLoading(false);
            }
        };

        fetchStates();
    }, [countryId]);

    return { states, loading, error };
};
