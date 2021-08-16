import ReactDOM from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import {store} from "./redux/store";
// console.log(store)
// alert('ddd')
import "./index.css";
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
