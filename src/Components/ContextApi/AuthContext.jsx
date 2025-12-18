import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import app from "../FirebaseConfig/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

export const Auth_Data_Context = createContext({});


export default function AuthContext({ children }) {
  const auth = getAuth(app);
  //google provider
  const Google_Provider = new GoogleAuthProvider();

  const [User, setUser] = useState(null);
  //tracking user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        setUser(currentUser);
      }
    });
  }, []);

  //user signup

  const handleSignUpUser = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      return await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
    return user;
  };
  //SignIn
  const handleSignIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  };
  

   const signIn_with_google= ()=>{
      const userCredential=signInWithPopup(auth,Google_Provider);
      setUser(userCredential.user)
      return userCredential;
  
    }
  
  //logout
  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
   
  };
  console.log(User);
  
  //sending all variable to other components
  const Auth_info = {
    User,
    setUser,
    handleSignUpUser,
    handleSignIn,
     handleSignOut,
    signIn_with_google,
  };
  return (
    <Auth_Data_Context.Provider value={Auth_info}>
      {children}{" "}
    </Auth_Data_Context.Provider>
  );
}
//for exprot auth-data-context
export const use_Auth_Data_Context = () => {
  return useContext(Auth_Data_Context);
};
