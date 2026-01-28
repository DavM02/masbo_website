import { useState, useEffect } from "preact/hooks";

export function useLazyComponent(importFunc) {
  const [ Component, setComponent ] = useState(null);

  useEffect(() => {
    let mounted = true;
    importFunc()
      .then((mod) => {
        if (mounted) setComponent(() => mod.default || mod);
      })
      .catch(console.error);

    return () => {
      mounted = false;
    };
  }, [ ]);

  return Component;
}
