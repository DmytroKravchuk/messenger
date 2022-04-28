import React, {FC} from "react";

import Router from "./components/Router/Router";
import "./style.scss";

const App: FC = () => (
    <div className="app">
        <Router/>
    </div>
);

export default App;