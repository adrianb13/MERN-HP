import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; 
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./store";
import { getAPICharacters, getAPISpells, loadHouseInfo } from "./actions/index";

store.dispatch(getAPICharacters());
store.dispatch(getAPISpells());
store.dispatch(loadHouseInfo());

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>, 
  document.getElementById("root")
);

serviceWorker.unregister();
