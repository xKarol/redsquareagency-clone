type BreakpointNames = "sm" | "md" | "lg" | "xl";

export const breakpoints: { [key: string]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1400,
};

type BreakpointType = {
  up: (breakpoint: BreakpointNames | string) => string;
  down: (breakpoint: BreakpointNames | string) => string;
};

const breakpoint = {} as BreakpointType;

breakpoint.up = (breakpoint) => {
  if (breakpoint in breakpoints) {
    return `(min-width: ${breakpoints[breakpoint]}px)`;
  }
  return `(min-width: ${breakpoint})`;
};

breakpoint.down = (breakpoint) => {
  if (breakpoint in breakpoints) {
    return `(max-width: ${breakpoints[breakpoint]}px)`;
  }
  return `(max-width: ${breakpoint})`;
};

export { breakpoint };
