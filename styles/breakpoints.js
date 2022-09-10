export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1400,
};

export const breakpoint = {};

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
