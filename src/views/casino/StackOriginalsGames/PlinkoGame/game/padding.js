export const DECIMAL_MULTIPLIER = 10000;

export function pad(number) {
  return number * DECIMAL_MULTIPLIER;
}

export function unpad(number) {
  return Math.floor(number / DECIMAL_MULTIPLIER);
}
