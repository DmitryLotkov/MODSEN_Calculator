import { ERRORS } from '../constants/errorMessages'
/*
const add = (x: number, y: number) => x + y
const subtract = (x: number, y: number) => x - y
const multiply = (x: number, y: number) => x * y
const divide = (x: number, y: number) => x / y

class Command {
  constructor(execute, undo: any, value, current) {
    this.execute = execute
    this.undo = undo
    this.value = value
    this.current = current
  }
}

const AddCommand = '+',
  SubCommand = '-',
  MulCommand = '*',
  DivCommand = '/'

const Commands = {
  AddCommand: function (value, current) {
    return new Command(add, subtract, value, current)
  },
  SubCommand: function (value, current) {
    return new Command(subtract, add, value, current)
  },
  MulCommand: function (value, current) {
    return new Command(multiply, divide, value, current)
  },
  DivCommand: function (value, current) {
    return new Command(divide, multiply, value, current)
  },
}

function calculatorCore() {
  let current = 0
  const commands = []

  return {
    execute: function (command) {
      current = +command.execute(
        command.current,
        command.value,
      )
      commands.push(command)
      return current
    },

    undo: function () {
      const command = commands.pop()
      current = command.undo(current, command.value)
    },

    getCurrentValue: function () {
      return current
    },
  }
}

const operations = (value, currentValue, operand) => {
  switch (operand) {
    case AddCommand:
      return new Commands.AddCommand(value, currentValue)
    case SubCommand:
      return new Commands.SubCommand(value, currentValue)
    case MulCommand:
      return new Commands.MulCommand(value, currentValue)
    case DivCommand:
      return new Commands.DivCommand(value, currentValue)
    default:
      return 0
  }
}

export const expressionCalculator = (input) => {
  const calculator = new calculatorCore()
  const calcPriority = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  }

  const firstItem = []
  const stack = []
  const inputArr = input
    .split('')
    .filter((digit) => digit != ' ')

  for (let i = 0; i < inputArr.length; i++) {
    if (+inputArr[i] >= 0 && +inputArr[i - 1] >= 0) {
      inputArr[i - 1] = inputArr[i - 1] + inputArr[i]
      inputArr.splice(i, 1)
      i -= 1
    }
  }

  for (let i = 0; i < inputArr.length; i++) {
    if (+inputArr[i] >= 0) {
      firstItem.push(+inputArr[i])
    } else if (inputArr[i] === '.') {
      firstItem.push(inputArr[i])
    } else if (inputArr[i] === '(') {
      stack.push(inputArr[i])
    } else if (inputArr[i] === ')') {
      while (stack[stack.length - 1] != '(') {
        if (stack.length < 1)
          throw new Error(ERRORS.ErrorBrackets)
        firstItem.push(stack.pop())
      }
      stack.pop()
    } else if (
      inputArr[i] === AddCommand ||
      inputArr[i] === SubCommand ||
      inputArr[i] === MulCommand ||
      inputArr[i] === DivCommand
    ) {
      while (
        calcPriority[[stack[stack.length - 1]]] >=
        calcPriority[inputArr[i]]
      )
        firstItem.push(stack.pop())
      stack.push(inputArr[i])
    }
  }

  while (stack.length > 0) firstItem.push(stack.pop())
  if (firstItem.includes('('))
    throw new Error(ERRORS.ErrorBrackets)
  if (inputArr.length === 1) {
    for (let i = 0; i < firstItem.length; i++) {
      if (typeof firstItem[i] === 'number')
        stack.push(firstItem[i])
      else {
        stack.push(
          calculator.execute(
            operations(
              stack.pop(),
              stack.pop(),
              firstItem[i],
            ),
          ),
        )

        if (stack[stack.length - 1] === Infinity) {
          throw new Error(ERRORS.DivideZero)
        }
      }
    }
  } else {
    if (inputArr[inputArr.length - 1] >= 0) {
      return inputArr.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue,
        '',
      )
    }
  }
  return inputArr[0]
}
*/
