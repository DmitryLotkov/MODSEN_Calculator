export function isParenthesisBalanced(
  str: string,
): boolean {
  const arr = str.split('')

  let count = 0
  for (const char of arr) {
    if (char === '(') {
      count++
    } else if (char === ')') {
      if (count === 0) {
        return false
      }
      count--
    }
  }
  return count === 0
}
