import styled from 'styled-components'

export const SettingContainer = styled.section`
  height: 856px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  background: white;
  background: ${({ theme }) => theme.colors.background};
`

export const ClearButton = styled.button`
  max-width: 400px;
  padding: 28px 27px;
  border-radius: 8px;
  cursor: pointer;
  text-align: start;
  background: ${({ theme }) =>
    theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.text};
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  border: ${({ theme }) => theme.colors.border};

  &:hover {
    background: ${({ theme }) =>
      theme.colors.backgroundHover};
    color: white;
  }
`

export const SettingTitle = styled.h3`
  margin-bottom: 46px;
  font-weight: 400;
  font-size: 64px;
  line-height: 74px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
`

export const SettingText = styled.p`
  margin-bottom: 7px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text};
`
