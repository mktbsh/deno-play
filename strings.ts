

const DIVIDER = toRadix16("f".repeat(64));

function toRadix16(value: string): number {
  return parseInt(value, 16);
}

export function toNumberBetweenZeroAndOne(value: string): number {
  const decimal = toRadix16(value) / DIVIDER;
  return Math.trunc(decimal * 100);
}
