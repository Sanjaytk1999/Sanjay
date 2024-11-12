import React from "react";
import reactDOM from "react-dom/client"
import App from "./App";
import { render } from "@testing-library/react";

const el=document.getElementById("root")
const root=reactDOM.createRoot(el)

root.render(<App/>)