import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

function Header(){
  return <h3>CV Maker</h3>
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>
);
