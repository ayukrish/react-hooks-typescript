import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<{ theme: 'light' | 'dark' }>`
  body {
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    background: ${(props) => (props.theme === 'light' ? '#fff' : '#16161d')};
  }

  * {
    box-sizing: inherit;
  }

  .main {
    max-width: 1260px;
    margin: 0 auto;
  }

  .flex {
    display: flex;
  }

  .row {
    flex-direction: row;
  }
  
  .column {
    flex-direction: column;
  }
  
  .wrap {
    flex-wrap: wrap;
  }

  .space-between {
    justify-content: space-between;
  }

  .align-center {
    align-items: center
  }

  .section {
    // background: $grey;
  }
`;

export default GlobalStyles;
