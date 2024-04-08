import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firbase/firebase.config";

export const AuthData=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const googleProvider=new GoogleAuthProvider




    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=>unSubscribe

    },[])
    const logOutUser=()=>{
        return signOut(auth)
    }
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }


console.log(user);

    const authShare={createUser , logUser ,user ,logOutUser ,googleLogin}
    return (
     <AuthData.Provider value={authShare}>
        {children}
     </AuthData.Provider>
    );
};

export default AuthProvider;