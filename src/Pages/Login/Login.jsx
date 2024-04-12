import { Link ,useLocation ,useNavigate} from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import SocialLogin from "../../Component/SharedComponent/SocialLogin";
import PasswordReset from "../../Component/SharedComponent/PasswordReset";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";



const Login = () => {
    const{logUser,setLoading }=useAuth()
    const[passShow,setPassShow]=useState( false )  ;
      const location=useLocation()
    const navigate=useNavigate()


    const handleToLogin=(e)=>{
        e.preventDefault()
        const login=new FormData(e.currentTarget);
        const email=login.get('email');
        const password=login.get('password');
        logUser(email,password)
        .then((result) => {
          if(result.user){
            setLoading(true)
            navigate(location?.state||'/')
          }
            console.log(result.user);
          
        }).catch((err) => {
            console.log(err.message);
        });
    }
   
    return (
        <div>
            <div className="md:w-1/2 mx-auto md:border border-1 border-black p-2 my-2 rounded-md" >
            <div>
                    <h3 className="text-2xl font-semibold text-center mt-5">Please Login</h3>
                </div>
            <form onSubmit={handleToLogin} className="card-body -mt-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your Password  Password</span>
          </label>
          <div className="flex items-center relative">
          <input type={!passShow?'password':'text'} placeholder="password" name="password" className="input input-bordered w-full" required autoComplete="off"/>
          <span className="absolute right-0 mr-4" onClick={()=>setPassShow(!passShow)} >{passShow? <FaEye/>:<FaEyeSlash/> }</span>
          </div>




        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <div className='text-center'>
      <PasswordReset />
      </div>

      <div className="text-center">
        <p className="mt-4">Don't have account? Please <Link to='/registration' className="text-blue-800 font-semibold">Registration</Link> </p>
      </div>
        <SocialLogin/>
            </div>
             

        </div>
    );
};

export default Login;