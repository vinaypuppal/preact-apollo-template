import { injectGlobal } from 'emotion';
import App from './components/app';

/* eslint-disable no-unused-expressions */
injectGlobal`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #FAFAFA;
    font-family: 'Helvetica Neue', arial, sans-serif;
    font-weight: 400;
    color: #444;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    height: 100%;
  }
`;
/* eslint-enable no-unused-expressions */

export default App;
