export type ButtonOperationType = 'fx'| 'numeric' | 'operator'


export type OperatorType = "+" | "-" | "*"| "/" | "=" | '%'
export type NumericValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 |8 | 9
export type AdditionalOperatorType = '.' | '(' | '0' | ')' | 'C' | 'CE'
export type OperatorValueType = OperatorType | NumericValueType | AdditionalOperatorType
export type ButtonType = {
  label: string,
  value: OperatorValueType
  // eslint-disable-next-line prettier/prettier
  type: ButtonOperationType
}
export type ButtonsType = Array<ButtonType>


