import React from "react"
import * as Styled from "../styled"
import { Display } from "@components/Display"
import KeypadCl from "@components/Keypad/KeypadCL/KeypadCL"
import { HistoryContainer } from "@containers/HistoryContainer"
import { ActionToPerformType } from "../../../types"



export type CalculatorPropsType = {
  isScreenClear:boolean
  // eslint-disable-next-line prettier/prettier
  screenValue:string
  handleActionToPerform: ActionToPerformType
  isOperationFinished: boolean
}
type IState = {
  isHistoryOpen: boolean,
}

class CalculatorCL extends React.Component<CalculatorPropsType, IState> {
  constructor(props: CalculatorPropsType) {
    super(props)
    this.state = {
      isHistoryOpen:true,
    }
  }

  handleOpenHistory = () => {
    this.setState((prevState) => ({
      isHistoryOpen: !prevState.isHistoryOpen,
    }))
  }

  render() {

    return (
      <Styled.Main>
        <Styled.Section>
          <Display />
          <Styled.HistoryButton
            onClick={this.handleOpenHistory}>
            {this.state.isHistoryOpen ? "▷" : "◁"}
          </Styled.HistoryButton>
         <KeypadCl
            handleActionToPerform={this.props.handleActionToPerform}
            isScreenClear={this.props.isScreenClear}
            screenValue={this.props.screenValue}
            isOperationFinished={this.props.isOperationFinished}
          />
        </Styled.Section>
        {this.state.isHistoryOpen && <HistoryContainer/>}
      </Styled.Main>
    )
  }
}

export default CalculatorCL
