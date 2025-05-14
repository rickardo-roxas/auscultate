import { useRef, useCallback, useState, useEffect } from "react";
import api from '../configs/API.config';

/**
 * Custom hook for fetching data using Axios with support for lazy loading and refetching.
 * Leverages Axios interceptors for toast consistency.
 *
 * @param {string} url - The API endpoint.
 * @param {object} options - Axios config (method, headers, data, etc.).
 * @param {boolean} lazy - If true, skips auto-fetch on mount.
 * @returns {object} loading, error, data, refetch
 */
function useFetch(url, options = {}, lazy = false) {
    const [loading, setLoading] = useState(!lazy);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const configRef = useRef(options); 

    const fetchData = useCallback(async (overrideConfig = {}) => {
        setLoading(true);
        setError(null);

        try {
            const response = await api({
                url,
                method: configRef.current.method || "GET",
                ...configRef.current,
                ...overrideConfig, // possible new payload
            });

            setData(response.data);
            return response.data;
        } catch(err) {
            setError(err);
            return null;
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        if (!lazy) fetchData();
    }, [fetchData, lazy]);

    const refetch = useCallback(
        (overrideConfig = {}) => fetchData(overrideConfig),
        [fetchData]
    );

    return { loading, error, data, refetch };
}

export default useFetch;