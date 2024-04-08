import { useContext } from 'react';
import { AuthData } from '../AuthProvider/AuthProvider';

const useAuth = () => {
    const all = useContext(AuthData)
    return all 
}

export default useAuth;