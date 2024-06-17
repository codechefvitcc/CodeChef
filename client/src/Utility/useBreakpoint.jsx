import { useMediaQuery } from 'react-responsive';
import { theme } from '../../tailwind.config'; // Your tailwind config

const breakpoints = theme.screens;

export function useBreakpoint(breakpointKey) {
  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });
  const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
  return {
    [`is${capitalizedKey}`]: bool,
  };
}
