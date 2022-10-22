import React, { useEffect, useState } from "react"

import * as Styled from "../components"
import { useAppSelector } from "../../../BLL/store"
import { useDispatch } from "react-redux"
import { setIsOperationFinishedAC, setScreenValueAC } from "../../../BLL/calculatorReduser"
import { Display } from "../../../components/Display"
import { Keypad } from "../../../components/Keypad/KeypadFC"
import { History } from "../../../components/History/HistoryFC"

import { handleActionToPerform } from "../../../utils/utilsFunctions"


export const CalculatorFC = () => {
  const dispatch = useDispatch()
  const screenValue = useAppSelector<string>(state => state.keyPadPage.screenValue)
  const result = useAppSelector<string>(state => state.keyPadPage.result)
  if (result === "Infinity") {
    throw "Error when try to divide to zero"
  }
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(true)

  const clearLastDigit = () => {
    if (screenValue !== "0") {
      dispatch(setScreenValueAC((screenValue.substring(0, screenValue.length - 1)), "numeric"))
      dispatch(setIsOperationFinishedAC(false))
    }
    if (screenValue === "") {
      dispatch(setScreenValueAC("0", "operator"))
    }
  }
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      e.preventDefault()
      clearLastDigit()
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [screenValue])

  const handleOpenHistory = () => setIsHistoryOpen(!isHistoryOpen)

  return (
    <Styled.Main>
      <Styled.Section>
        <Display />
        <Styled.HistoryButton onClick={handleOpenHistory}>{isHistoryOpen ? "▷" : "◁"}</Styled.HistoryButton>
        <Keypad actionToPerform={handleActionToPerform} />
      </Styled.Section>
      {isHistoryOpen && <History />}
    </Styled.Main>
  )
}
