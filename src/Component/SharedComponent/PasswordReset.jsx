import React, { useState } from 'react';
import useAuth from '../../Pages/useAuth/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const PasswordReset = () => {
  const [errors,setError]=useState(' ')
  const { resetPassword}=useAuth()
    const [email,setEmail]=useState(' ')
const navigate=useNavigate();
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit=()=>{
      if(!email || emailRegex.test(email) ){
        return setError('please provide valid email')
    }
        console.log(email);
       resetPassword(email)
        .then(()=>{ 
          document.getElementById('my_modal_2').close();
           toast.success("Please check your email address") 
          console.log(navigate);})
           .catch((error)=>setError('Invalid email address' ))
        
    }
    return (
        <div>
            
{/* Open the modal using document.getElementById('ID').showModal() method */}


<button onClick={()=>document.getElementById('my_modal_2').showModal()} className="label-text-alt link link-hover text-sm font-semibold ">Forgot password?</button>




<dialog id="my_modal_2" className="modal text-center">
  <div className="modal-box">

<p className='font-bold my-2'>Enter your email address</p>
<input type='email' className='rounded-lg' required onChange={(e)=>setEmail(e.target.value)} /> <br />
{
  errors?<p className='text-red-600 font-semibold' >{errors}</p>:''
}


<a href="#_" className="relative rounded px-2 py-[6px] overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative"><button className=' mt-4' onClick={handleSubmit}>Submit</button></span>
        </a>




  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

        <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition: Bounce/>
        </div>
    );
};

export default PasswordReset;