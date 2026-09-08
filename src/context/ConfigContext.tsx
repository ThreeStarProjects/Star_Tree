import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { Config } from '../types';

interface ConfigState {
  config: Config | null;
  loading: boolean;
  error: string | null;
}

const ConfigContext = createContext<ConfigState>({
  config: null,
  loading: true,
  error: null,
});

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ConfigState>({
    config: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}config.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load config (${r.status})`);
        return r.json() as Promise<Config>;
      })
      .then((config) => setState({ config, loading: false, error: null }))
      .catch((err: Error) =>
        setState({ config: null, loading: false, error: err.message })
      );
  }, []);

  return <ConfigContext.Provider value={state}>{children}</ConfigContext.Provider>;
}

export const useConfig = () => useContext(ConfigContext);
