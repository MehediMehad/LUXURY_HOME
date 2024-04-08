import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // create user
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password);
    }
    // 
    useEffect(() =>{
        const unSubscribe =onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo ={
        user,
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes ={
    children:PropTypes.node,
}
export default AuthProvider;