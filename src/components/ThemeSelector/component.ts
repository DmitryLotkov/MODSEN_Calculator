import styled from 'styled-components'

export const OptionChange = styled.option`
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`
export const SelectList = styled.select`
  /*appearance: none;*/
  max-width: 400px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 32px;
  border-radius: 5px;
  cursor: pointer;
  padding: 28px 27px;
  font: normal normal normal 32px/38px 'Kanit', sans-serif;
  border: ${({ theme }) => theme.colors.border}
  color: ${({ theme }) => theme.colors.text}
  position: relative;
  background: ${({ theme }) => theme.colors.background};
    /*url("data:image/svg+xml;utf8,<svg viewBox='0 0 140 140' width='24' height='24' xmlns='http://www.w3.org/2000/svg'><g><path d='m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z' fill='white'/></g></svg>")
    no-repeat;
  background-position: right 5px top 50%;*/
`
