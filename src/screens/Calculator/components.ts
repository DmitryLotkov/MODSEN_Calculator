import styled from 'styled-components'

export const Section = styled.section`
  /* width: 1508.5px;*/
  width: 100%;
  height: 857px;
`
export const Main = styled.main`
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
`
export const HistoryButton = styled.button`
  position: absolute;
  right: 0;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  max-width: 200px;
  max-height: 40px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  z-index: 1;

  &:hover {
    background: ${({ theme }) =>
      theme.colors.backgroundHover};
    color: white;
  }
`
