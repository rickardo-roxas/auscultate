import { useCallback, useEffect, useRef } from "react";

/**
 * Custom React hook that sets up a timeout and gives you control to reset or clear it.
 * @param {*} callback - The function to execute after the delay.
 * @param {*} delay - - The delay in milliseconds before the callback is called.
 * @returns {object} - Contains the timer and clear
 */
function useTimeout(callback, delay) {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { reset, clear };
}

export default useTimeout;