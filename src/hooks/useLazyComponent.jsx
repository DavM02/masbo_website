import { useState, useEffect } from "preact/hooks";
import { getScrollBar } from "@components/Scroll/ScrollAccess"
export function useLazyComponent(importFunc) {
  const [ Component, setComponent ] = useState(null);

  useEffect(() => {
    let mounted = true;
    importFunc()
      .then((mod) => {
        if (mounted) setComponent(() => mod.default || mod);
        getScrollBar()?.update();
      })
      .catch(console.error);

    return () => {
      mounted = false;
    };
  }, [ ]);

  return Component;
}
