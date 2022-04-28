import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.css';

import {setupStore} from "./store";

import App from "./App";

ReactDOM.render(
    <Provider store={setupStore()}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById("root"));