import React from "react"
import * as Styled from "./components"
import {
  ButtonOperationType,
  buttons, OperatorValueType,
} from "../../../constants/buttonData"

import { Button } from "./Button/Button"


type KeyPadPropsType = {
  actionToPerform : (value:OperatorValueType, keyType:ButtonOperationType) => void
  allClear: boolean
}
export const Keypad = ({actionToPerform}:KeyPadPropsType) => {

  const handleClickButton = (value:OperatorValueType, keyType:ButtonOperationType) => {
    actionToPerform(value, keyType);
  }
  return (
    <Styled.Keypad>
      {
        buttons.map((btn, i) => <Button value={btn.value} label={btn.label} type={btn.type} key={i} onClick={handleClickButton}
           />)}
    </Styled.Keypad>
  )
}
