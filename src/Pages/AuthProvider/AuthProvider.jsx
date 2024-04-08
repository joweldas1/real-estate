import { createContext } from "react";

export const AuthData=createContext(null)
const AuthProvider = ({children}) => {
    const authShare='yes i am sharing'
    return (
     <AuthData.Provider value={authShare}>
        {children}
     </AuthData.Provider>
    );
};

export default AuthProvider;