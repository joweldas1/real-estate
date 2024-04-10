import { Link } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import {useForm} from "react-hook-form"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {  useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Registration = () => {
  const [show,setShow]=useState(false)
  const{createUser ,updateUserProfile }=useAuth();
  const validationStyle={
  color:'red',
  fontSize:'16px',
  fontWeight:'600'
  }
  const {  handleSubmit,formState: { errors },trigger,register,reset }=useForm();  



    const handleToRegistration=(data ,errors)=>{
      console.log(errors);
      const{email,password,name,image}=data
      createUser(email,password)
      .then((result) => {
        if(result.user){
          updateUserProfile(name,image)
          .then(()=>{
            const notify = () => toast( `User account created done !You are in login ` ,{
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              style: {
                background: "#03fc5e", 
                color:'white'
            },
             });
             reset()
             notify() 
             return result.user
          })
         
        }
       
      }).catch((err) => {
        const notify = () => toast(`something happen wrong,  please try later`,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: {
              background: "#fc0330", 
              color:'white'
          },
        });
        notify()
        reset()

       console.log(err.message);
      });
      
    }


    return (
        <div>
            <div>
            <div className="md:w-1/2 lgz;w-2/4 mx-auto" >
                <div>
                    <h3 className="text-2xl font-semibold text-center mt-5">Please Registration</h3>
                </div>
            <form onSubmit={handleSubmit(handleToRegistration)} className="card-body -mt-5">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" id="name" name='name' {...register('name')} placeholder="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" id="image" name='image' {...register('image',{
            required:"Your image link must required",
            pattern:{
              value:/^((https?|ftp|file):\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[-A-Za-z0-9+&@#\/%=~_|])$/,
              message:"Invalid Link"
            }
          }
        )} placeholder="image" className="input input-bordered" required />
        {
            errors.image
            && (
            <p style={validationStyle     } >{errors.image.message}</p>
          ) || ' '}
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input type="text" id="email" name='email'  className="input input-bordered" placeholder="email"  required={true}
            {...register("email", {
            required: "Email is Required!!!" ,
            pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,
            message: "Invalid email address" 
          
            }})}
            onKeyUp={() => {trigger("email")}} />
            
            {
            errors.email && (
            <p style={validationStyle     } >{errors.email.message}</p>
          )}
         
          
        </div>
{/* password------------------------------------- */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
        
         <input type={show?"text":"password" } id="password" name="password" placeholder="password" className="input input-bordered" required autoComplete="off"
           {...register("password", {
            required: "You must specify a password",
            pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
            message: "Password should contain at least one number and one    special character"
            },
           minLength: {
           value: 8,
           message: "Password must be more than 8 characters"
           },
           maxLength: {
           value: 20,
           message: "Password must be less than 20 characters"
           },
           })}
           onKeyUp={() => {trigger("password")}}
           error={Boolean(errors.password)}/>


<span className='absolute  md:mt-12 lg:right-[400px]' onClick={()=>(setShow(!show))}>{show?<FaEye />:<FaEyeSlash/>}</span> <br />
          {
            errors.password && <p style={validationStyle} >{errors.password.message}</p>
          }

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control    ">
          <button className="btn  btn-primary">Sign in</button>
        </div>
      </form>

      <div className="text-center">
        <p className="">Don't have account? Please</p>  <Link to='/login' className="text-blue-800 font-semibold">Log in</Link> 
      </div>
           
            </div>
             

        </div>
        <ToastContainer />
        </div>
        
    );
};

export default Registration;