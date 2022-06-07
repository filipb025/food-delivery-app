import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import { initialState } from "./context/initialState";
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App tab="home" />
    </StateProvider>
  </Router>
);
