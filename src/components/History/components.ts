import styled from 'styled-components'
import {
  black,
  borderColor,
  buttonBGColor,
} from '../../styles'

export const History = styled.section`
  width: 411.5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
  &::after {
    content: '';
    background-color: ${({ theme }) => theme.colors.border};
    position: absolute;
    top: 20px;
    bottom: 20px;
    /*width: 100%;*/
    width: 2px;
    left: 0;
  }
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  margin-bottom: 30px;
`

export const HistoryItem = styled.div`
  padding-top: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 41px;
  margin-top: 30px;
`
export const HistoryCleanButton = styled.button`
  box-sizing: border-box;
  border-radius: 32px;
  opacity: 1;
  background: ${buttonBGColor} no-repeat 0% 0%;
  border: 1px solid ${borderColor};
  width: 180px;
  height: 60px;
  font-size: 25px;
  font-weight: 400;
  cursor: pointer;
  color: ${black};
`
