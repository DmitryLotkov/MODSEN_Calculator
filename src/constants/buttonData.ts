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
export const buttons:ButtonsType = [
  { label: '%', value: '%', type: 'operator' },
  { label: '7', value: 7, type: 'numeric' },
  { label: '8', value: 8, type: 'numeric' },
  { label: '9', value: 9, type: 'numeric' },
  { label: '*', value: '*', type: 'operator' },
  { label: '-', value: '-', type:  'operator'},
  { label: '4', value: 4, type: 'numeric' },
  { label: '5', value: 5, type: 'numeric' },
  { label: '6', value: 6, type: 'numeric' },
  { label: '\\', value: '/', type: 'operator' },
  { label: '+', value: '+', type: 'operator' },
  { label: '1', value: 1, type: 'numeric' },
  { label: '2', value: 2, type: 'numeric' },
  { label: '3', value: 3, type: 'numeric' },
  { label: '=', value: '=', type: 'operator' },
  { label: '.', value: '.', type: 'fx' },
  { label: '(', value: '(', type: 'numeric' },
  { label: '0', value: '0', type: 'numeric' },
  { label: ')', value: ')', type: 'numeric' },
  {
    label: /*allClear ? 'C' : */'C',
    value: /*allClear ? 'C' : */'C',
    type: 'fx',
  },
]
