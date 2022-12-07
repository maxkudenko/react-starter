import { App } from "App";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client"

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

