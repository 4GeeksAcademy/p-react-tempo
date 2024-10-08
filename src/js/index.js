import React from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";

import SimpleCounter from "./component/SimpleCounter.jsx"

const root = ReactDOM.createRoot(document.getElementById('app'));

let seconds = 0;
setInterval(() => {
    root.render(<SimpleCounter seconds={seconds} />);
    seconds++;
}, 1000);
