import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import useAuth from "../../Pages/useAuth/useAuth";
import { useState } from "react";



const Navbar = () => {
const [hidden,setHidden]=useState(false)
const {user ,logOutUser,  }=useAuth();
const customShadow={
  shadow:'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'
}

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

<div className="navbar bg-[#45B39D] text-white rounded-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" onClick={dropdownControl} className="btn btn-ghost z-30 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      {     hidden ?

      <ul tabIndex={0} className="menu menu-sm dropdown-content text-black mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52 ">
      
     {navItem}
    
     
      </ul>   : '' }
    </div>
    <div className="flex items-center justify-start relative">
    
    <a className="  text-[#03099E] text-2xl font-semibold  "> Helper. </a>

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
  user?<img className="rounded-full ring-2 w-11 ring-blue-800 mr-2 "  src={user.photoURL}/> : ''
}  
</div>

 

      {
        user? <><div href="#_" onClick={logOutUser} style={customShadow}  className="rounded-lg px-2 py-[6px] overflow-hidden group bg-[#03099E] relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue -400 transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative"><Link to='/login'>Logout</Link  ></span>
        </div> </>:
       <div href="#_" style={customShadow} className="relative rounded px-2 py-[6px] overflow-hidden group bg-[#03099E] relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
       <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
       <span className="relative"><Link to='/login'>Login</Link  ></span>
       </div>

      }
     
  </div>
</div>














        </div>
    );
};

export default Navbar;






// home , blog , about Us