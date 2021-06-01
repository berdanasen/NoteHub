import React, { useContext, useEffect } from 'react'  
import { Redirect } from 'react-router-dom';
import AppContext from './AppContext'

function Logout() {
    const ctx = useContext(AppContext);
    useEffect(() => {
        ctx.setIsLoggedIn(false);
        ctx.setToken(null);
    });
    // todo: token'ı sil
    localStorage.removeItem("token");

    return <Redirect to="/login?logout=success" />;
}

export default Logout
