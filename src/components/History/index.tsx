import React from "react"
import * as Styled from "./components"
import { useAppSelector } from "../../BLL/store"

export const History = () => {
  const history = useAppSelector<Array<string>>(state => state.keyPadPage.history)
  return (
    <Styled.History>
      <Styled.Title>History</Styled.Title>
      {
        history.map((item, index) => <Styled.HistoryItem key={index}>{item}</Styled.HistoryItem>)
      }
    </Styled.History>)
}
