import styled from 'styled-components'

export const Display = styled.div`
  height: 150px;
  width: 100%;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 113.5px;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  position: relative;
  line-height: 74px;
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
