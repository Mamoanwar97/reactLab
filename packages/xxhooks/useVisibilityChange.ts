import * as React from "react";

const subscribe = (callback) => {
  document.addEventListener("visibilitychange", callback);

  return () => {
    document.removeEventListener("visibilitychange", callback);
  };
};

const getSnapshot = () => {
  return document.visibilityState;
};

const getServerSnapshot = () => {
  throw Error("useVisibilityChange is a client-only hook");
};

export default function useVisibilityChange() {
  const visible = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return visible === "visible";
}
