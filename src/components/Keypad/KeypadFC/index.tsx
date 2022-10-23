import React from "react"
import * as Styled from "../components"
import { ActionToPerformType, ButtonOperationType, OperatorValueType } from "../../../types"
import { Button } from "../../Button/Button"
import { useAppSelector } from "../../../BLL/store"
import { isParenthesisBalanced } from "../../../helpers/isParenthesisBalanced"
import { useDispatch } from "react-redux"
import { getButtons } from "../../../constants/getButtons"

export type ButtonType = {
  label: string,
  value: OperatorValueType
  type: ButtonOperationType
}

export type ButtonsType = Array<ButtonType>
type KeyPadPropsType = {
  actionToPerform: ActionToPerformType,
}
export const Keypad = ({actionToPerform}:KeyPadPropsType) => {
  const dispatch = useDispatch()
  const screenValue = useAppSelector<string>(state => state.keyPadPage.screenValue)
  const isOperationFinished = useAppSelector<boolean>(state => state.keyPadPage.isOperationFinished)
  const isScreenClear = screenValue === "0"
  const isBalanced = isParenthesisBalanced(screenValue)

  const buttons:ButtonsType = getButtons(isScreenClear)

  const handleClickButton = (value:OperatorValueType, keyType:ButtonOperationType) => {
    actionToPerform(
      value,
      keyType,
      screenValue,
      isOperationFinished,
      isBalanced,
      dispatch
      );
  }
  return (
    <Styled.Keypad>
      {
        buttons.map((btn, i) => <Button value={btn.value} label={btn.label} type={btn.type} key={i} onClick={handleClickButton}
           />)}
    </Styled.Keypad>
  )
}
