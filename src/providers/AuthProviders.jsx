import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  //useState hook 
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);
  const googleAuthProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUpUsingGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };
  const logOut=()=>{
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    //stop observing while unmounting
    return () => {
      unsubscribed();
    };
  }, []);
  
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signUpUsingGmail,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
