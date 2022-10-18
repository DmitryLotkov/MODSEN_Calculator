import React from "react"
import * as Styled from "../components"
import { useAppSelector } from "../../../BLL/store"
import { clearHistoryAC } from "../../../BLL/calculatorReduser"
import { useDispatch } from "react-redux"

export const History = () => {
  const history = useAppSelector<Array<string>>(state => state.keyPadPage.history)
  const dispatch = useDispatch()
  const historyHandler = () => {
    dispatch(clearHistoryAC())
  }
    return (
      <Styled.History>
        <Styled.Title>History</Styled.Title>
        <Styled.HistoryCleanButton onClick={historyHandler}>Clear history</Styled.HistoryCleanButton>
        {
          history.map((item, index) => <Styled.HistoryItem key={index}>{item}</Styled.HistoryItem>)
        }
      </Styled.History>)
  }
