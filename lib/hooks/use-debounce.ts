import { useRef, useCallback } from "react";

export function useDebounce<T extends (...args: any[]) => Promise<any> | any>(func: T, delay: number) {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const debouncedFunc = useCallback((...args: Parameters<T>) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        return new Promise<ReturnType<T>>((resolve) => {
            timeoutRef.current = setTimeout(async () => {
                const result = await func(...args);
                resolve(result);
            }, delay);
        });
    }, [func, delay]);

    return debouncedFunc;
}