import { useLocation, Navigate } from "react-router-dom";

import React, { Children } from 'react'

const CheckAuth = ({ isAuthenticated, Children }) => {
    const location = useLocation();
    if (location.pathname === "/") {
        if (!isAuthenticated) {
            return <Navigate to="/login" />;
        }
    }
    if (
        !isAuthenticated &&
        !(
            location.pathname.includes("/login") ||
            location.pathname.includes("/register")
        )
    ) {
        return <Navigate to="/login" />;
    }
    if (
        isAuthenticated &&
        (location.pathname.includes("/login") ||
            location.pathname.includes("/register"))
    ) {
        return <Navigate to="/home" />;
    }
    return (
        <>
            {Children}
        </>
    )
}
export default CheckAuth
