import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassowrd(e.target.value)}
      ></input>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default Auth;
