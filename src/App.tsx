import React, {useEffect} from "react";

import LoginForm from "./components/LoginForm";
import "./style.scss";
import {checkAuth} from "./store/reducers/auth/ActionCreators";
import {useAppDispatch, useAppSelector} from "./hooks/redux";

const App = () => {
    const {isAuth} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(localStorage.getItem("token")) {
            dispatch(checkAuth());
        }
    }, [])

    if (isAuth) {
        return (
            <div className="app">
                1111111111
            </div>
        )
    }

    return (
        <div className="app">
            <LoginForm />
        </div>
    )
}

export default App;