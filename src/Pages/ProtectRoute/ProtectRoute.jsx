import React from 'react';
import useAuth from '../useAuth/useAuth';

const ProtectRoute = ({children}) => {
    const {user}=useAuth()
    return (
        <div>
            
        </div>
    );
};

export default ProtectRoute;