import { useEffect, useRef } from "react";

/**
 * Streamlines the process of running effects only once when a component mounts.
 * @param {*} effect - The side-effect.
 */
function useEffectOnce(effect) {
    const effectRef = useRef(effect);

    useEffect(() => {
        return effectRef.current;
    }, []);
}

export default useEffectOnce;