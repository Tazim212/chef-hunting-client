import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <button className="btn-square loading mt-10 text-black"></button>
    }

    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={{from: location}} to='/login' replace></Navigate>
        </div>
    );
};

export default PrivateRoute;