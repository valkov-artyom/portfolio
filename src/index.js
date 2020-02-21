import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./js/components/app";

import './assets/css/main.css';
import './assets/scss/main.scss';
import './js/script';
import '../node_modules/normalize.css/normalize.css'



ReactDOM.render(<App />, document.querySelector("#root"));