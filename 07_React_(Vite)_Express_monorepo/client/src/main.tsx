import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

//* For testing only!
// console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
// console.log("process.env.APP_Test_String:", process.env.APP_Test_String);

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
