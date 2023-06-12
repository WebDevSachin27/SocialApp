import { Provider as AlertProvider, positions, transitions } from "react-alert";

import AlertTemplate from "react-alert-template-basic";
import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./store";

// import ReactDOM from "react-dom/client";




// import ReactDOM from "react-dom";



// import { createReducer } from "@reduxjs/toolkit";


const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
};
// ReactDOM.createRoot(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AlertProvider template={AlertTemplate} {...options}>
//         <App />
//       </AlertProvider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
     <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </StrictMode>
);