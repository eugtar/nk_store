import React from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = React.useState<number>(4);

  React.useEffect(() => {
    const onWinResize = () => {
      const windowSize = document.documentElement.clientWidth;
      if (windowSize >= 991) {
        setBreakpoint(4);
      } else if (windowSize >= 767) {
        setBreakpoint(3);
      } else if (windowSize >= 550) {
        setBreakpoint(2);
      } else if (windowSize >= 375) {
        setBreakpoint(1);
      }
    };
    onWinResize();
    window.addEventListener("resize", onWinResize);
    return () => window.removeEventListener("resize", onWinResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
