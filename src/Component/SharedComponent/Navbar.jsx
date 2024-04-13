import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import useAuth from "../../Pages/useAuth/useAuth";
import { useEffect, useState } from "react";

const Navbar = () => {
const [hidden,setHidden]=useState(false)
const {user ,logOutUser,  }=useAuth();

const dropdownControl=()=>{
setHidden(true)
setTimeout(() => {
  return setHidden(false)
}, 2000);
}

   const navItem= 
    <>
    <li> <NavLink to="/" > Home </NavLink> </li>
    <li> <NavLink to="/blog" > Blog </NavLink> </li>
    <li> <NavLink to="/aboutUs"  > About Us </NavLink> </li>
    {
      user?  <li> <NavLink to="/profile" > Profile </NavLink> </li>:" "

    }
    </>
   
    return (
        <div>

<div className="navbar bg-gray-400  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" onClick={dropdownControl} className="btn btn-ghost z-30 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      {     hidden ?

      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52 ">
      
     {navItem}
    
     
      </ul>   : '' }
    </div>
    <div className="flex items-center justify-start relative">
    
    <a className="   text-2xl font-semibold  "> Helper </a>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className=" menu-horizontal px-1 nav">
     {navItem}
    </ul>
  </div>
  <div className="navbar-end">
 
 
  <div className="tooltip tooltip-left" data-tip={user?.displayName}>
{
  user?<img className="rounded-full w-10 mr-2 "  src={user.photoURL}/> :<img alt="Tailwind CSS Navbar component"  className="rounded-full w-10 mr-2 "src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
}  
</div>

 
      {
        user? <><button onClick={logOutUser} className="py-2 bg-slate-200 px-2 rounded-md text-sm hover:bg-black hover:text-white">  <Link to="/login">Logout</Link></button> </>:
        <button className="py-2 bg-slate-200 px-2 rounded-md text-sm hover:bg-black hover:text-white">  <Link to='/login'>Login</Link> </button>
      }
     
  </div>
</div>















        </div>
    );
};

export default Navbar;






// home , blog , about Us