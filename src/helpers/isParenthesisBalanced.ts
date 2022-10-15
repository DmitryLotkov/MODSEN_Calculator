export function isParenthesisBalanced(str: string) {
  const stack: Array<string> = []

  for (const char of str) {
    if (char === '(') {
      stack.push(char)
    } else if (stack.pop() !== '(') {
      return false
    }
  }

  return stack.length === 0
}
