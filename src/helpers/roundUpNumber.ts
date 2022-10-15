export function roundUpNumber(screenValue: string): string {
  if (Number.isInteger(Number(screenValue))) {
    return screenValue
  } else {
    return Number(screenValue).toFixed(3).toString()
  }
}
