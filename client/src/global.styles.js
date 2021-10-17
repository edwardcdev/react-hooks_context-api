import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .body {
    height: 100vh;
    width: 100%;
    /* text-align: center; */
    font-family: 'Open Sans Condensed';
    ${'' /* padding: 2rem 6rem; */}

    @media screen and (max-width: 800px) {
      padding: 10px;
      ${'' /* font-size: 12px; */}
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
		box-sizing: border-box;
	}
`