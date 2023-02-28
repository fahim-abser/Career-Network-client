import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
export const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [adminNavmenu, setAdminNavMenu] = useState(true)
    const [addValueInModal,setAddValueInModal]=useState(null)
    const [isloding ,setisLoding]=useState(true)

    const registerUser = (email, password) => {
        setisLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setisLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const githubSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setisLoding(false)
        });

        return () => unsubscribe();
    }, [])
    const authInfo = {
        user,
        registerUser,
        logIn,
        logOut,
        setUser,
        updateUser,
        googleSignIn,
        githubSignIn,
        setAdminNavMenu,
        adminNavmenu,
        setAddValueInModal,
        addValueInModal,
        isloding ,
        setisLoding
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;