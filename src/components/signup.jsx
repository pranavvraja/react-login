import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = async;
// };

function signup() {
  return (
    <>
      <div className="w-96 h-auto p-10 text-1xl justify-center flex flex-col items-start bg-slate-200 border-spacing-3 rounded-xl shadow-xl ">
        <h1 className="text-slate-700 items-center">Sign Up</h1>
        <label className="text-slate-800 p-2">Name:</label>

        <input
          className="w-full bg-slate-100 shadow-lg text-slate-900"
          type="text"
        ></input>
        <label className="text-slate-800 p-2">E-mail:</label>
        <input
          className="w-full bg-slate-100 shadow-lg text-slate-900"
          type="text"
        ></input>
        <label className="text-slate-800 p-2">Password:</label>
        <input
          className="w-full bg-slate-100 shadow-lg text-slate-900"
          type="password"
        ></input>
        <input
          className="text-1xl bg-slate-900 rounded-lg p-2 m-4"
          type="submit"
        ></input>
      </div>
      <div className="p-4">
        <p>
          Existing user? <a href="/">Login</a>
        </p>
      </div>
    </>
  );
}

export default signup;
