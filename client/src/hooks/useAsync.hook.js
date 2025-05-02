import { useCallback, useEffect, useState } from "react";

/**
 * Takes a callback function that performs the asynchronous operation and an optional array of dependencies.
 * It can memoize the callback function using useCallback.
 * @param {*} callback 
 * @param {*} dependencies 
 * @returns {object} - Returns loading, error, and value properties. 
 */
function useAsync(callback) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [value, setValue] = useState(null);

    const callbackMemoized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [callback]);

    useEffect(() => {
        callbackMemoized();
    }, [callbackMemoized]);

    return { loading, error, value };
}

export default useAsync;