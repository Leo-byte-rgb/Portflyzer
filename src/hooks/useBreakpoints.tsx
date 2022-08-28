import { useLayoutEffect, useRef, useState } from "react";
import { breakpoints } from "theme/breakpoints";

type PossibleBreakpoints = keyof typeof breakpoints;

const useBreakpoint = () => {
  const isFirstRender = useRef(true);
  const [breakpoint, setBreakpoint] = useState<PossibleBreakpoints>();

  useLayoutEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;

      if (width <= breakpoints.sm) {
        return setBreakpoint("sm");
      }
      if (width <= breakpoints.md) {
        return setBreakpoint("md");
      }
      if (width <= breakpoints.lg) {
        return setBreakpoint("lg");
      }
      setBreakpoint("xlg");
    };

    window.addEventListener("resize", updateBreakpoint);

    if (isFirstRender.current) {
      updateBreakpoint();
      isFirstRender.current = false;
    }

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  console.log(breakpoint);
  return breakpoint;
};

export default useBreakpoint;
