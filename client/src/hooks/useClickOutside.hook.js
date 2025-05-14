import useEventListener from './useEventListener.hook';

/**
 * Custom React hook that triggers a callback when a click occurs outside the referenced element.
 * @param {React.RefObject<HTMLElement>} ref - A React ref pointing to the element you want to monitor.
 * @param {Function} callback - The function to be called when a click is detected outside the element.
 */
function useClickOutside(ref, callback) {
    useEventListener("click", e => {
        if (ref.current == null || ref.current.contains(e.target)) return;
        callback(e);
    }, document);
}

export default useClickOutside;