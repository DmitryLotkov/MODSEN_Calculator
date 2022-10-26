import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { AppStoreType } from "@store/store"
import { AdditionalOperatorType, ButtonOperationType, NumericValueType, OperatorValueType } from "../types"
import CalculatorCL from "../screens/Calculator/CalculatorCL/CalculatorCL"
import { handleClickFunctionKey, handleClickNumericOperatorKey, handleClickResultKey } from "@utils/utilsFunctions"


const mapStateToProps = (state: AppStoreType) => {
  return {
    screenValue: state.keyPadPage.screenValue,
    isScreenClear: state.keyPadPage.screenValue === "0",
    isOperationFinished: state.keyPadPage.isOperationFinished,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleActionToPerform: (value: OperatorValueType,
                            keyType: ButtonOperationType,
                            screenValue: string,
                            isOperationFinished: boolean,
                            isBalanced: boolean) => {
      switch (keyType) {
        case "fx":
          handleClickFunctionKey(
            value,
            dispatch,
            screenValue,
            )
          break
        case "numeric":
          // eslint-disable-next-line prettier/prettier
          handleClickNumericOperatorKey(value as NumericValueType | AdditionalOperatorType,
            keyType,
            dispatch,
            isOperationFinished,
            screenValue)
          break
        case "operator":
          handleClickNumericOperatorKey(value as NumericValueType | AdditionalOperatorType,
            keyType,
            dispatch,
            isOperationFinished,
            screenValue)
          break
        case "result":
          handleClickResultKey(dispatch, screenValue, isBalanced)
          break
      }
    },
  }
}

export const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(CalculatorCL)
