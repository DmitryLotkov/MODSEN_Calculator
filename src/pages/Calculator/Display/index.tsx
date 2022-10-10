import React from "react"
import * as Styled from "./components"
import { useAppSelector } from "../../../BLL/store"


export const Display = () => {
  const screenValue = useAppSelector<string>(state => state.keyPadPage.screenValue)

  return <Styled.Display>{
    Number.isInteger(+screenValue) || screenValue === "-"
    ? screenValue
    : Number(screenValue).toFixed(3)}
  </Styled.Display>
}
