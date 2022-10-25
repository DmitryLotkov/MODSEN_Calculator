import styled from 'styled-components'
import {
  black,
  borderColor,
  buttonBGColor,
} from '../../styles'

export const Keypad = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 701px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  box-sizing: border-box;
  padding-left: 132px;
`

export const Button = styled.button`
  box-sizing: border-box;
  border-radius: 32px;
  opacity: 1;
  background: ${buttonBGColor} no-repeat 0% 0%;
  border: 1px solid ${borderColor};
  width: 130px;
  height: 130px;
  font-size: 64px;
  font-weight: 400;
  line-height: 74px;
  cursor: pointer;
  color: ${black};
`

export const MiddleContainer = styled.div`
  /*width: 757px;*/
  display: flex;
  /*border: 1px solid black;*/
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  height: 735px;
  margin-top: 28.5px;
`
export const SideContainer = styled.div`
  margin-top: 28.5px;
  margin-left: 130px;
  margin-right: 130px;
  flex-wrap: wrap;
  align-content: space-between;
  width: 150px;
  height: 736px;
  display: flex;
  /*border: 1px solid black;*/
  box-sizing: border-box;
`
