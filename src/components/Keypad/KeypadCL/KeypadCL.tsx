import React from "react"
import {
  ButtonOperationType,
  OperatorValueType,
} from "../../../types"
import { CalculatorPropsType } from "../../../screens/Calculator/CalculatorCL/CalculatorCL"
import { Button } from "../../Button/Button"
import { isParenthesisBalanced } from "../../../helpers/isParenthesisBalanced"
import * as Styled from "../styled"
import { getButtons } from "../../../constants/getButtons"
import { ButtonsType } from "../KeypadFC/types"


class KeypadCl extends React.Component<CalculatorPropsType> {
  constructor(props: CalculatorPropsType) {
    super(props)
  }

  buttons: ButtonsType = []
  isBalanced = false
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
    this.isBalanced = isParenthesisBalanced(this.props.screenValue)
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
