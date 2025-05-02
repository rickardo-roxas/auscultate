import { useRef, useEffect } from "react";

/**
 * Stores the current and previous values and updates them when the value changes.
 * @param {object} value - The current value of the DOM reference.
 * @returns {object} - The previous value of the DOM reference.
 */
function usePrevious(value) {
    const ref = useRef();
    
    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export default usePrevious;