/* eslint-disable react-refresh/only-export-components */

import React from "react";
import ReactDOM from "react-dom/client";

import { crc16 } from "easy-crc";

const App = () => {
  const data = new Uint8Array([
    0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39,
  ]);
  console.log(crc16("CCITT-FALSE", data));
  return <h1>Hello</h1>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
