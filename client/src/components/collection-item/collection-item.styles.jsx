import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 24.5vw;
  display: flex;
  flex-direction: column;
  height: 45rem;
  align-items: center;
  position: relative;

  &:hover {
    .image{
      opacity: 0.8;
      cursor: pointer;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 45vw;

    &:hover {
      .image{
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`
export const BackgroundImage = styled.div`
  width: 95%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  &:hover {
    height: 100%;
    weight: 100%:
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`

export const AddButton = styled(CustomButton)`
  width: 65%;
  opacity: 0.7;
  font-size: 2rem;
  justify-content: center;
  position: absolute;
  top: 33rem;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px 0 10px;
  }
`

export const CollectionFooterContainer = styled.div`
  width: 90%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
`
export const NameContainer = styled.span`
  width: 85%;
  margin-bottom: 15px;
`

export const PriceContainer = styled.span`
  width: 10%;
  margin-bottom: 15px;
`