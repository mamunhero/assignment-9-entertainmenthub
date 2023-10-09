import { createContext, useEffect, useState } from "react";
import auth from './../Fairbase/Firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";





export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

  // user
  const [user, setUser] = useState();

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // creatrSignIn
  const createSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout
  const logout = () => {
    return signOut(auth)
  }

  // googlesignin
  const googleSignIn = () => {
     signInWithPopup(auth, googleProvider)
  }


  // observer
  useEffect(()=> {
      const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
    })
    return  ()=> {
      unSubscribe
    }
  },[])

  const authInfo = {
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