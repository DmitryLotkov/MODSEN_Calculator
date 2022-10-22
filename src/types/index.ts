import { Dispatch } from "redux"

export type ButtonOperationType = 'fx'| 'numeric' | 'operator' | "result"


export type OperatorType = "+" | "-" | "*"| "/" | "=" | '%'
export type NumericValueType = 1 | 2 | 3 | 4 | 5 | 6 | 7 |8 | 9 | "-"
export type AdditionalOperatorType = '.' | '(' | '0' | ')' | 'C' | 'CE'
export type OperatorValueType = OperatorType | NumericValueType | AdditionalOperatorType
export type ActionToPerformType = (value: OperatorValueType,
                                   keyType: ButtonOperationType,
                                   screenValue: string,
                                   isOperationFinished: boolean,
                                   isBalanced: boolean,
                                   dispatch?:Dispatch
) => void
export type ThemeType = "light" | "dark" | "colored"
export type ControlPanelPropsType = {
  switchTheme: (appTheme:ThemeType) => void
  // eslint-disable-next-line prettier/prettier
  appTheme: ThemeType
}
export type ButtonPropsType = {
  value: OperatorValueType,
  onClick: (
    value: OperatorValueType,
    type: ButtonOperationType,
  ) => void,
  label: string,
  type: ButtonOperationType,
}


