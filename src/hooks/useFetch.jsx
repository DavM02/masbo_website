import { useQuery } from '@tanstack/react-query';

export function useFetch(key, url, options = {}) {
  return useQuery({
    queryKey: [ key ],
    queryFn: async () => {
      if (typeof url === 'function') {
        return await url();
      } else {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
        return await response.json();
      }
    },
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
    ...options,
  });
}
