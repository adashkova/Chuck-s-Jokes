import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.25rem;
}
`;

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,

  document.getElementById('root')
);
