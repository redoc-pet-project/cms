import { useCallback, useEffect, useState } from "react";
import { getProxies, type IGetProxyTye } from "~/services/proxyService";
import type { IProxy } from "~/types/proxyTypes";

export const useProxies = (props: IGetProxyTye) => {
  const [proxies, setProxies] = useState<IProxy[]>([]);
  const [meta, setMeta] = useState<{
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  }>({ page: 1, limit: 10, total: 0, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProxies = useCallback(async () => {
    setLoading(true);
    setError(null);
    console.log(props);
    try {
      const { data, meta } = await getProxies(props);
      setProxies(data);
      setMeta(meta);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  const refresh = (props: IGetProxyTye) => {
    const fetchProxies = async () => {
      setLoading(true);
      setError(null);
      console.log(props);
      try {
        const { data, meta } = await getProxies(props);
        setProxies(data);
        setMeta(meta);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchProxies();
  };

  useEffect(() => {
    fetchProxies();
  }, [fetchProxies]);

  return {
    proxies,
    loading,
    error,
    refresh,
    meta,
  };
};
