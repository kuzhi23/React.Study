import React from "react";
import ReactDOM from "react-dom";
// import UseReducer from "./Components/useReducer_Hooks/useReducer";
import InPutReducer from "./Components/useReducer_Hooks/inPutReducer";
import "./index.css";
// import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <UseReducer /> */}
    <InPutReducer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
