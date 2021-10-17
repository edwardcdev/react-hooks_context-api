import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`

export const CollectionTitleContainer = styled.h1`
  font-size: 3rem;
  margin-bottom: 2.5rem;
  align-self: center;
` 

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
