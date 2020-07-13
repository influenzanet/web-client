import { useState, useEffect } from "react"

export const useAsyncApiCall = (call: (...args: any[]) => any): [{ value: any, error: any, loading: boolean }, (...params: any[]) => void] => {
  const [value, setValue] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const [params, setParams] = useState<any[]>([]);

  const triggerCall = (...params: any[]) => {
    setParams(params);
    setTrigger(true);
  }

  async function performCall(params: any[]) {
    try {
      setLoading(true);
      setValue(null);
      setError(null);
      const result = await call(...params);
      setValue(result);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (trigger) {
      setTrigger(false);
      performCall(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return [{ value, error, loading }, triggerCall];
}
