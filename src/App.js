import * as React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Routes from "pages/Router";
import store from "store";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
      font-family: Helvetica;
  }
  * {
      box-sizing: border-box;
  }
`;

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <GlobalStyle />
      <Routes />
    </React.Fragment>
  </Provider>
);

export default App;
