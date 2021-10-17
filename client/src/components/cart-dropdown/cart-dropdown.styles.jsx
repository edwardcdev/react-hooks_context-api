import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 24.5rem;
  height: 32.5rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 9rem;
  right: 6rem;
  z-index: 5;

  button {
    margin-top: auto;
  }
`

export const CartItemsContainer = styled.div`
  height: 24.5rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const EmptyMessageContainer = styled.span`
   font-size: 2rem;
    margin: 10rem auto;
`