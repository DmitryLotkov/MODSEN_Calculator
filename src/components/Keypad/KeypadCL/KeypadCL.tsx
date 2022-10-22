import React from 'react'
import {
  ButtonOperationType,
  OperatorValueType,
} from '../../../types'
import { CalculatorPropsType } from '../../../screens/Calculator/CalculatorCL/CalculatorCL'
import { ButtonsType } from '../KeypadFC'
import { Button } from '../../Button/Button'
import { isParenthesisBalanced } from '../../../helpers/isParenthesisBalanced'
import * as Styled from '../components'
type IState = Record<string, unknown>

class KeypadCl extends React.Component<
  CalculatorPropsType,
  IState
> {
  constructor(props: CalculatorPropsType) {
    super(props)
  }

  buttons: ButtonsType = [
    { label: '%', value: '%', type: 'operator' },
    { label: '7', value: 7, type: 'numeric' },
    { label: '8', value: 8, type: 'numeric' },
    { label: '9', value: 9, type: 'numeric' },
    { label: '*', value: '*', type: 'operator' },
    {
      label: '-',
      value: '-',
      type:
        this.props.screenValue === '0'
          ? 'numeric'
          : 'operator',
    },
    { label: '4', value: 4, type: 'numeric' },
    { label: '5', value: 5, type: 'numeric' },
    { label: '6', value: 6, type: 'numeric' },
    { label: '\\', value: '/', type: 'operator' },
    { label: '+', value: '+', type: 'operator' },
    { label: '1', value: 1, type: 'numeric' },
    { label: '2', value: 2, type: 'numeric' },
    { label: '3', value: 3, type: 'numeric' },
    { label: '=', value: '=', type: 'result' },
    { label: '.', value: '.', type: 'fx' },
    { label: '(', value: '(', type: 'numeric' },
    { label: '0', value: '0', type: 'numeric' },
    { label: ')', value: ')', type: 'numeric' },
    {
      label: this.props.isScreenClear ? 'CE' : 'C',
      value: this.props.isScreenClear ? 'CE' : 'C',
      type: 'fx',
    },
  ]
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
