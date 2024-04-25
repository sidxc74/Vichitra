import React from 'react'

import {Navigate, useLocation} from "react-router-dom"


const ProtectedRoute = ({children}) => {
    const data = JSON.parse(sessionStorage.getItem('isAuth'))
  
    

    if(!data) {
        return <Navigate to="/login"  />
    }
 return children

};

export default ProtectedRoute;