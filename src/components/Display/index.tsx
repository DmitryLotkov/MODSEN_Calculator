import React from "react"
import * as Styled from "./components"
import { useAppSelector } from "../../BLL/store"


export const Display = () => {
  const screenValue = useAppSelector<string>(state => state.keyPadPage.screenValue)
  const result = useAppSelector<string>(state => state.keyPadPage.result)
  return (
    <Styled.Display>
      <Styled.DisplayScreenValueItem>{screenValue}</Styled.DisplayScreenValueItem>
      <Styled.DisplayResultItem>{result}</Styled.DisplayResultItem>
    </Styled.Display>
  )
}
