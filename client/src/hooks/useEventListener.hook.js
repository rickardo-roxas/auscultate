import { useEffect, useRef } from "react";

/**
 * Custom React hook that attaches an event listener to a specified target (defaults to `window`).
 * @param {String} eventType - The type of event to listen for.
 * @param {Function} callback - The function to be called when the event occurs.
 * @param {EventTarget} element - The target element to map the event listener. 
 */
function useEventListener(eventType, callback, element = window) {
    const callbackRef = useRef(callback);
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    useEffect(() => {
        if (element == null) return;
        const handler = e => callbackRef.current(e);
        element.addEventListener(eventType, handler);
        return () => element.removeEventListener(eventType, handler);
    }, [eventType, element]);
}

export default useEventListener;