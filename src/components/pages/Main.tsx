import React, {FC, useEffect, useState} from "react";
import Spin from "antd/lib/spin";

import LoginForm from "../LoginForm";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {checkAuth} from "../../store/reducers/auth/ActionCreators";
import Chat from "../Chat";



const Main: FC = () => {
    const {isAuth} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem("token")) {
            dispatch(checkAuth())
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [])

    if (isLoading) {
        return (<div className="main-loader">
            <Spin />
        </div>);
    }

    if (isAuth) {
        return (
            <div className="app">
                <Chat/>
            </div>
        )
    }

    return (
        <LoginForm />
    )
}

export default Main;