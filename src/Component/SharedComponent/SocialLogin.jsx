import { FaGoogle } from "react-icons/fa";

import useAuth from "../../Pages/useAuth/useAuth";

const SocialLogin = () => {
    const {googleLogin}=useAuth()



    const googleUser=()=>{
        return googleLogin()
    }
    return (
        <div>
            <button className="btn" onClick={googleUser}>Continue with <FaGoogle/> </button>
        </div>
    );
};

export default SocialLogin;