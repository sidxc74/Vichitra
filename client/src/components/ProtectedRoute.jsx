import React from 'react'

import {Navigate, useLocation} from "react-router-dom"
import useAuthStore from '../state/clientState';

const ProtectedRoute = ({children}) => {
    const isAuth = useAuthStore((state) => state.isAuthenticated);
    let location = useLocation();

    if(!isAuth) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;