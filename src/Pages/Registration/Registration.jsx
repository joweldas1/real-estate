import { Link } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

const Registration = () => {
const{createUser}=useAuth()
    const handleToRegistration=(e)=>{
        e.preventDefault()
        const register=new FormData(e.currentTarget)
        const email=register.get('email')
        const password=register.get('password')
        createUser(email,password)
        .then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.log(err.message)
        });
    }


    return (
        <div>
            <div>
            <div className="md:w-1/2 mx-auto" >
                <div>
                    <h3 className="text-2xl font-semibold text-center mt-5">Please Registration</h3>
                </div>
            <form onSubmit={handleToRegistration} className="card-body -mt-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="url" name="image" placeholder="image" className="input input-bordered" required />
        </div>
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
          <input type="password" name="password" placeholder="password" className="input input-bordered" required autoComplete="off"/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control    ">
          <button className="btn  btn-primary">Login</button>
        </div>
      </form>
      <div className="text-center">
        <p className="">Don't have account? Please</p>  <Link to='/registration' className="text-blue-800 font-semibold">Registration</Link> 
      </div>
           
            </div>
             

        </div>
        </div>
    );
};

export default Registration;