import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../shopping-bag.svg';

export const CartContainer = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  bottom: 4px;

  @media screen and (max-width: 800px) {
    bottom: 2px;
  }
`

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 4rem;
  height: 4rem;

  @media screen and (max-width: 800px) {
    height: 3rem;
    width: 3rem;
  }
`

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 1.5rem;
  font-weight: old;
  bottom: 7px;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    bottom: 10px;
  }
`