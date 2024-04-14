import * as React from "react";

const subscribe = (cb) => {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
};

const getSnapshot = () => {
  return JSON.stringify({
    width: window.innerWidth,
    height: window.innerHeight,
  });
};

export function useWindowSizeVersion1() {
  const size = React.useSyncExternalStore(subscribe, getSnapshot);

  return JSON.parse(size);
}

// OR

const getWidthSnapshot = () => {
  return window.innerWidth;
};

const getHeightSnapshot = () => {
  return window.innerHeight;
};

export function useWindowSizeVersion2() {
  const width = React.useSyncExternalStore(subscribe, getWidthSnapshot);
  const height = React.useSyncExternalStore(subscribe, getHeightSnapshot);

  return {
    width,
    height,
  };
}
