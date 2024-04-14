import * as React from "react";

export default function useLockBodyScroll() {
  React.useLayoutEffect(() => {
    const overflowValue = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowValue;
    };
  }, []);
}
