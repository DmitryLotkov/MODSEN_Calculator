import styled from 'styled-components'

export const SettingContainer = styled.div`
  height: 560px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  background: white;
`

export const ClearButton = styled.button`
  max-width: 400px;
  padding: 28px 27px;
  border-radius: 8px;
  cursor: pointer;
  text-align: start;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font: normal normal normal 32px/38px 'Kanit', sans-serif;
  border: 2px solid #434343;

  &:hover {
    background: ${({ theme }) =>
      theme.colors.backgroundHover};
    color: white;
  }
`

export const SettingTitle = styled.h1`
  margin-bottom: 46px;
  font: normal normal normal 64px/77px 'Kanit', sans-serif;
`

export const Settingtext = styled.p`
  margin-bottom: 7px;
  font-size: 18px;
  font-family: 'Kanit', sans-serif;
`
