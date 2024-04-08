import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <h1 className="text-center text-4xl font-semibold text-blue-800">
                Oppps,Something went wrong <br />
                Please back to <Link className='text-red-800' to='/' >Home page </Link>
            </h1>
        </div>
    );
};

export default ErrorPage;