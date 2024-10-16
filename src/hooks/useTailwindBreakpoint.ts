import { useEffect, useState } from "react";

const tailwindBreakpoints: { [key: string]: number } = {
  xs: 0,
  xsm: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const useTailwindBreakpoint = (
  maxBreakpoint: keyof typeof tailwindBreakpoints,
) => {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState<boolean>(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setIsAboveBreakpoint(width >= tailwindBreakpoints[maxBreakpoint]);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isAboveBreakpoint;
};

export default useTailwindBreakpoint;
