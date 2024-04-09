import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firbase/firebase.config";

export const AuthData=createContext(null)

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null);
    const googleProvider=new GoogleAuthProvider;
    const gitProvider = new GithubAuthProvider;

    

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const logUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
           

        })
        return ()=>{unSubscribe()}

    },[])


    const logOutUser=()=>{
        setLoading(false)

        return signOut(auth)
    }
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const gitLogin=()=>{
        return signInWithPopup(auth,gitProvider)
    }



console.log(user);

    const authShare={createUser , logUser ,user ,logOutUser ,googleLogin , gitLogin ,loading,setLoading}
    return (
     <AuthData.Provider value={authShare}>
        {children}
     </AuthData.Provider>
    );
};

export default AuthProvider;