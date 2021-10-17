import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 23%;

  img {
    width: 100%;
    height: 100%;
  }
`

export const TextContainer = styled.div`
  text-align: center;
  width: 25%;
`

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  span {
    margin: 0 5px;
  }
  div {
    cursor: pointer;
  }
`

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
