import { useCallback, useEffect, useState } from "react";
import { getProxies } from "~/services/proxyService";
import type { IProxy } from "~/types/proxyTypes";

export const useProxies = () => {
    const [proxies, setProxies] = useState<IProxy[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProxies = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getProxies();
            setProxies(data);
        } catch (e: unknown) {
            setError(e instanceof Error ? e.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchProxies();
    }, [fetchProxies]);

    return {
        proxies,
        loading,
        error,
        refresh: fetchProxies
    }
}