import useAuth from '../useAuth/useAuth';
import {useLocation , Navigate} from 'react-router-dom'

const ProtectRoute = ({children}) => {
    const location=useLocation()
    const sharePath=location.pathname;
    const {user,loading}=useAuth()
if(loading){
    return <span className="loading loading-spinner loading-lg"></span>

}
    if(!user){
        return <Navigate to='/login' state={sharePath || '/'} ></Navigate>
    }
   return children
};

export default ProtectRoute;