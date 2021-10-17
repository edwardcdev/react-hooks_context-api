import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;

  @media screen and (max-width: 800px) {
    width: 5rem;
    height: 90px;
    ${'' /* padding: 0; */}
  }
`

export const OptionsContainer = styled.div`
  position: absolute;
  right: 25px;
  height: 115%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  transition: .5s all ease-in;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const OptionLink = styled(Link)`
  padding: 1rem 1.5rem;
  font-size: 2rem;
  font-weight: 300;

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`

