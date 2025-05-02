import { useEffect } from "react";
import useTimeout from "./useTimeout.hook";

/**
 * Custom hook that internally delays the execution of a callback function.
 * @param {*} callback 
 * @param {*} delay 
 * @param {*} dependencies 
 */
export default function useDebounce(callback, delay, dependencies) {
    const { reset, clear } = useTimeout(callback, delay);
    useEffect(reset, [...dependencies, reset]);
    
    useEffect(() => {
        clear();
        return clear;
    },[clear]);
}