import { Link } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import SocialLogin from "../../Component/SharedComponent/SocialLogin";

const Login = () => {
    const{logUser }=useAuth()
    const handleToLogin=(e)=>{
        e.preventDefault()
        const login=new FormData(e.currentTarget);
        const email=login.get('email');
        const password=login.get('password');
        logUser(email,password)
        .then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.log(err.message);
        });
    }
   
    return (
        <div>
            <div className="md:w-1/2 mx-auto" >
            <div>
                    <h3 className="text-2xl font-semibold text-center mt-5">Please Login</h3>
                </div>
            <form onSubmit={handleToLogin} className="card-body -mt-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required autoComplete="off"/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="text-center">
        <p className="">Don't have account? Please <Link to='/registration' className="text-blue-800 font-semibold">Registration</Link> </p>
      </div>
           <SocialLogin/>
            </div>
             

        </div>
    );
};

export default Login;