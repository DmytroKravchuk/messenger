import React, {useEffect, useState} from "react";

import LoginForm from "./components/LoginForm";
import {checkAuth} from "./store/reducers/auth/ActionCreators";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import Chat from "./components/Chat";
import "./style.scss";

const App = () => {
    const {isAuth} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem("token")) {
            dispatch(checkAuth())
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [])

    if (isLoading) {
        return null;
    }

    if (isAuth) {
        return (
            <div className="app">
                <Chat/>
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