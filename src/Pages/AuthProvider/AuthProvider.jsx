import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut ,updateProfile } from "firebase/auth";
import auth from "../Firbase/firebase.config";

export const AuthData=createContext(null)

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null);
    
    const googleProvider=new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(name,image)=>{
         return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL :image
         
          });
          
    }
    const logUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const subs= onAuthStateChanged(auth,currentUser=>{
           setLoading(false)
            return setUser(currentUser)
        })
        return ()=>{subs()}
    },[])
    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const gitLogin=()=>{
        return signInWithPopup(auth,gitProvider)
    }
    const userUpdate=(name,image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        })
    }



    const authShare={createUser , logUser ,user ,logOutUser ,googleLogin , gitLogin ,loading,setLoading ,updateUserProfile ,resetPassword,userUpdate} 
    return (
     <AuthData.Provider value={authShare}>
        {children}
     </AuthData.Provider>
    );
};

export default AuthProvider;