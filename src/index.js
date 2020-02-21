import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "../app";

import './assets/css/main.css';
import './assets/scss/main.scss';
import './js/script';
import '../node_modules/normalize.css/normalize.css'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';



ReactDOM.render(<App />, document.querySelector("#root"));