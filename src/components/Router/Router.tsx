import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import Main from "../pages/Main";
import Users from "../Users";

const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="users" element={<Users/>}/>
        </Routes>
    )
}

export default Router;