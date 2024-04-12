import React, { useState } from 'react';
import useAuth from '../../Pages/useAuth/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useNavigation } from 'react-router-dom';


const Update = () => {
    const{userUpdate}=useAuth()
    const[errors,setErrors]=useState('')
    const urlCheck=(url)=>{
        const valid=/^(ftp|http|https):\/\/[^ "]+$/;
        return valid.test(url)
    }
const navigate=useNavigate()
    const handleOnClick=(e)=>{
        e.preventDefault()
        const fromData=new FormData(e.currentTarget)
        const name=fromData.get("userName");
        const image=fromData.get('imageURL')

        if(!urlCheck(image)){
           return setErrors('please provide valid URL')
        }
        setErrors('')
        userUpdate(name,image).
        then(()=> {
            toast.success('Profile update done')
            setTimeout(() => {
                return  navigate('/profile')
            }, 3000 );
            
        })
        .catch((error)=>{console.log(error.message);})

    }
    
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <form onSubmit={handleOnClick} action="" className='border border-black p-6 rounded-lg'>
                <div> <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" id="name" name='userName' placeholder="name" className="input input-bordered " required /></div>
          <div>
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" id="url" name='imageURL' placeholder="image url" className="input focus:border-black input-bordered" required />
          {
            errors
            && (
            <p className='text-red-700' >{errors}</p>
          ) || ' '}
          </div>
           <div className='text-center my-3'>
            <button className='btn btn-success py-2'>Update</button>
           
           </div>
       

            </form>
            <ToastContainer/>
        </div>
    );
};

export default Update;