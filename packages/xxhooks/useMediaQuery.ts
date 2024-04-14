import * as React from "react";

export default function useMediaQuery(query) {
  const subscribe = React.useCallback(
    (cb) => {
      const mm = window.matchMedia(query);

      mm.addEventListener("change", cb);

      return () => {
        mm.removeEventListener("change", cb);
      };
    },
    [query]
  );

  const getSnapshot = () => {
    const mm = window.matchMedia(query);

    return mm.matches;
  };

  const getServerSnapshot = () => {
    return;
  };

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
