import styled from 'styled-components'
import { black, borderColor } from '../../styles'

export const Display = styled.div`
  height: 150px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 113.5px;
  position: relative;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.colors.border};
    position: absolute;
    left: 20px;
    right: 20px;
    height: 2px;
    top: 150px;
  }
`

export const DisplayResultItem = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 74px;
  color: ${black};
`
export const DisplayScreenValueItem = styled(
  DisplayResultItem,
)`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 74px;
  color: ${borderColor};
`
