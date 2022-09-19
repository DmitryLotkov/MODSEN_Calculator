import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { headerBGColor, white } from '../../theme'

export const Header = styled.header`
  width: 100%;
  height: 120px;
  background-color: ${headerBGColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AppTitle = styled.div`
  text-align: left;
  font: normal normal normal 32px/38px Arial;
  letter-spacing: 0;
  color: ${white};
  opacity: 1;
  width: 213px;
  height: 37px;
  margin-left: 32px;
`

export const NavbarLink = styled(Link)`
  color: ${white};
  text-decoration: none;
  margin: 10px;
  position: relative;
  font-size: 32px;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 0;
  text-align: left;

  &:focus {
    ::after {
      content: '';
      background-color: ${white};
      position: absolute;
      width: 100%;
      height: 2px;
      top: 40px;
      left: 0;
    }
  }
`
