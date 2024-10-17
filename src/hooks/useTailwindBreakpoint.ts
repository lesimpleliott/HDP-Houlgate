/**
 * Un hook personnalisé qui permet d'utiliser les breakpoints de Tailwind CSS dans un composant React.
 * Si la taille de l'écran est supérieure ou égale à un breakpoint, le hook retourne un objet contenant un booléen.
 *
 * @returns {Object} Un objet contenant des booléens indiquant si chaque point de rupture est atteint.
 *
 * @example 1
 * const breakpoints = useTailwindBreakpoints();
 * const isMobile = breakpoints.sm;
 *
 * @exemple 2
 * const {xs,xsm,sm,md,lg,xl} = useTailwindBreakpoints();
 * const isMobile = sm;
 *
 */

import { useEffect, useState } from "react";

const tailwindBreakpoints: { [key: string]: number } = {
  xs: 0,
  xsm: 450,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const useTailwindBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState<{ [key: string]: boolean }>({
    xs: false,
    xsm: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  const handleResize = () => {
    const width = window.innerWidth;
    const newBreakpoints = Object.keys(tailwindBreakpoints).reduce(
      (acc, key) => ({
        ...acc,
        [key]: width >= tailwindBreakpoints[key],
      }),
      {},
    );
    setBreakpoints(newBreakpoints);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoints;
};

export default useTailwindBreakpoints;
