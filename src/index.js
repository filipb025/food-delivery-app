import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <App tab="home" />
  </Router>
);