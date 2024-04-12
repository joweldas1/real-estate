import React, { useState } from 'react';
import useAuth from '../../Pages/useAuth/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const PasswordReset = () => {
  const [errors,setError]=useState('')
  const { resetPassword}=useAuth()
    const [email,setEmail]=useState('')

const navigate=useNavigate()
    const handleSubmit=()=>{

        console.log(email);
        resetPassword(email)
        .then(()=>{ 
          document.getElementById('my_modal_2').close();
           toast.success("Please check your email address") 
          console.log(navigate);})
           .catch((error)=>setError(error.message))
        
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
  errors?<p>{errors}</p>:''
}
<button className='btn btn-success mt-4' onClick={handleSubmit}>Submit</button>



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