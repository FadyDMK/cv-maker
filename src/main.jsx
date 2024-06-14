import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/Footer.css";
import "./styles/Preview.css";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="content">
      <Header />
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);
