import styled from 'styled-components'
import {
  black,
  borderColor,
  buttonBGColor,
} from '../../../theme'

export const Keypad = styled.div`
  width: 100%;
  height: 798.5px;
  /*border: 1px solid green;*/
  display: flex;
  box-sizing: border-box;
`
export const Button = styled.button`
  grid-area: i;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 32px;
  opacity: 1;
  background: ${buttonBGColor} no-repeat 0% 0%;
  border: 1px solid ${borderColor};
  width: 150px;
  height: 150px;
  font-size: 64px;
  font-weight: 400;
  line-height: 74px;
  text-align: left;
  cursor: pointer;
  color: ${black};
`

export const MiddleContainer = styled.div`
  width: 757px;
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
