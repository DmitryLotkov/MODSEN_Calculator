import React from "react"
import * as Styled from "./components"
import { useAppSelector } from "../../../BLL/store"


export const Display = () => {
  const screenValue = useAppSelector<string>(state => state.keyPadPage.screenValue)
  return <Styled.Display>{screenValue}</Styled.Display>
}
