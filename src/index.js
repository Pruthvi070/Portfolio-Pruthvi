import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./App";

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById("root")); // Ensure this ID matches your HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);