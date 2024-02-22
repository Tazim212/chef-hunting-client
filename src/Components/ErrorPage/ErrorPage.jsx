import React from 'react';
import { useRouteError } from 'react-router-dom';
import errImg from "../../assets/errorImg.png";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <img className='w-3/4 ms-32' src={errImg} alt="" />
        </div>
    );
};

export default ErrorPage;