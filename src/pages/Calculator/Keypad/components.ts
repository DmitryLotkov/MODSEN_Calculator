import styled from 'styled-components'

export const Keypad = styled.div`
  width: 100%;
  height: 798.5px;
  border: 1px solid green;
  display: flex;
  box-sizing: border-box;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: #f2f2f2;
  border-radius: 20px;
  border: 1px solid #707070;
  width: 150px;
  height: 150px;
  font-size: 64px;
  font-weight: 400;
  line-height: 74px;
  text-align: left;
  cursor: pointer;
`

export const MiddleContainer = styled.div`
  width: 600px;
  display: flex;
  border: 1px solid black;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  height: 735px;
`
export const SideContainer = styled.div`
  margin-left: 130px;
  margin-right: 130px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  height: 735px;
  display: flex;
  border: 1px solid black;
  box-sizing: border-box;
`
