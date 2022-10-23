import React from "react"
import {
  ButtonOperationType,
  OperatorValueType,
} from "../../../types"
import { CalculatorPropsType } from "../../../screens/Calculator/CalculatorCL/CalculatorCL"
import { ButtonsType } from "../KeypadFC"
import { Button } from "../../Button/Button"
import { isParenthesisBalanced } from "../../../helpers/isParenthesisBalanced"
import * as Styled from "../components"
import { getButtons } from "../../../constants/getButtons"

type IState = Record<string, unknown>

class KeypadCl extends React.Component<CalculatorPropsType, IState> {
  constructor(props: CalculatorPropsType) {
    super(props)
  }
  buttons:ButtonsType = []
  isBalanced = isParenthesisBalanced(this.props.screenValue)
  handleClickButton = (
    value: OperatorValueType,
    keyType: ButtonOperationType,
  ) => {
    this.props.handleActionToPerform(
      value,
      keyType,
      this.props.screenValue,
      this.props.isOperationFinished,
      this.isBalanced,
    )
  }

  render() {
    this.buttons = getButtons(this.props.isScreenClear)

    return (
      <Styled.Keypad>
        {this.buttons.map((btn, i) => (
          <Button
            value={btn.value}
            label={btn.label}
            type={btn.type}
            key={i}
            onClick={this.handleClickButton}
          />
        ))}
      </Styled.Keypad>
    )
  }
}

export default KeypadCl
