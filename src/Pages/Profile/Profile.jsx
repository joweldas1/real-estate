import React from 'react';
import useAuth from '../useAuth/useAuth';

const Profile = () => {
    const {user}=useAuth()
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default Profile;