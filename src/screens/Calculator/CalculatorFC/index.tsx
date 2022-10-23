import React, { useState } from "react"
import * as Styled from "../components"
import { Display } from "../../../components/Display"
import { Keypad } from "../../../components/Keypad/KeypadFC"
import { History } from "../../../components/History/HistoryFC"
import { handleActionToPerform } from "../../../utils/utilsFunctions"

export const CalculatorFC = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(true)
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
