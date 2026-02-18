import { useState, useCallback } from 'react';

/**
 * @returns {{ fetchApp: (url: string) => Promise<void>, result: import('../types.js').IAppInfo | null, error: string | null }}
 */
export function useAppLookup() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const fetchApp = useCallback(async (url) => {
    setError(null);
    setResult(null);
    try {
      const res = await fetch('/api/lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const text = await res.text();
      let data = {};
      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error(res.ok ? 'Invalid response from server' : 'Lookup failed');
        }
      }
      if (!res.ok) throw new Error(data.error || 'Lookup failed');
      setResult(data);
    } catch (e) {
      setError(e.message || 'Failed');
    }
  }, []);

  return { fetchApp, result, error };
}
