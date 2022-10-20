export const range: Function = (
  start: number,
  stop: number,
  step: number = 1
): ReadonlyArray<number> =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
