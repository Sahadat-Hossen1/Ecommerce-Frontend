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
} from "firebase/auth";

export const Auth_Data_Context = createContext({});
export default function AuthContext({ children }) {
  const auth = getAuth(app);

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

  //user singup

  const handleSingUpUser = async (name, email, password) => {
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
  //SingIn
  const handleSingIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  };
  //logout
  const handleSingOut = async () => {
    const singOut = await signOut(auth);
    setUser(null);
    return singOut;
  };
  //sending all variable to other components
  const Auth_info = {
    User,
    setUser,
    handleSingUpUser,
    handleSingIn,
    handleSingOut,
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
