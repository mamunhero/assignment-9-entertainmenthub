import { createContext, useEffect, useState } from "react";
import auth from './../Fairbase/Firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

  // loading
  const [loading, setLoading] = useState(true);

  // user
  const [user, setUser] = useState(null);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
    
  }

  // creatrSignIn
  const createSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
    
  }

  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth)
    
  }

  // googlesignin
  const googleSignIn = () => {
     setLoading(true);
     signInWithPopup(auth, googleProvider)
    
  }


  // observer
  useEffect(()=> {
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false);
    })
    return  ()=> {
      unSubscribe
    }
  },[])

  const authInfo = {
    loading,
    user,
    createUser,
    createSignIn,
    logout,
    googleSignIn
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

