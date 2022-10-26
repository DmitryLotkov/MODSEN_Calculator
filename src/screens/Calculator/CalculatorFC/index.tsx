import React, { FC, useState } from 'react'
import * as Styled from '../styled'

import { History } from '@components/History/HistoryFC'
import { handleActionToPerform } from '@utils/utilsFunctions'
import { Display } from '@components/Display'
import { Keypad } from '@components/Keypad/KeypadFC'

export const CalculatorFC: FC = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(true)
  const handleOpenHistory = () =>
    setIsHistoryOpen(!isHistoryOpen)

  return (
    <Styled.Main>
      <Styled.Section>
        <Display />
        <Styled.HistoryButton onClick={handleOpenHistory}>
          {isHistoryOpen ? '▷' : '◁'}
        </Styled.HistoryButton>
        <Keypad actionToPerform={handleActionToPerform} />
      </Styled.Section>
      {isHistoryOpen && <History />}
    </Styled.Main>
  )
}
