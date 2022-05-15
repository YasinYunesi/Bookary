import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// State provider for context api
import StateProvider from "./context/Context";
// React slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StateProvider>
    <App tab="home" />
  </StateProvider>
);
