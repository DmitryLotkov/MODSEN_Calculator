import React from "react"
import * as Styled from "../components"
import { Display } from "../../../components/Display"
import { History } from "../../../components/History/HistoryFC"
import { ActionToPerformType } from "../../../types"

import KeypadCl from "../../../components/Keypad/KeypadCL/KeypadCL"


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
  /*componentDidUpdate(prevProps: Readonly<CalculatorPropsType>, prevState: Readonly<IState>) {
    if(this.props.isScreenClear !== prevProps.isScreenClear){
      this.props.isScreenClear
    }
  }*/

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
        {this.state.isHistoryOpen && <History />}
      </Styled.Main>
    )
  }
}

export default CalculatorCL
