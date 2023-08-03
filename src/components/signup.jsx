import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/welcome");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // function signup() {
  return (
    <main>
      <section>
        <div className="w-96 h-auto p-10 text-1xl justify-center flex flex-col items-start bg-slate-200 border-spacing-3 rounded-xl shadow-xl ">
          <h1 className="text-slate-700 items-center">Sign Up</h1>
          <label htmlFor="name" className="text-slate-800 p-2">
            Name:
          </label>

          <input
            className="w-full bg-slate-100 shadow-lg text-slate-900"
            type="text"
            label="name"
            placeholder="Name"
            required
          ></input>
          <label htmlFor="email" className="text-slate-800 p-2">
            E-mail:
          </label>
          <input
            className="w-full bg-slate-100 shadow-lg text-slate-900"
            type="text"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
          ></input>
          <label htmlFor="password" className="text-slate-800 p-2">
            Password:
          </label>
          <input
            className="w-full bg-slate-100 shadow-lg text-slate-900"
            type="password"
            label="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
          <button
            className="text-1xl bg-slate-900 rounded-lg p-2 m-4"
            type="submit"
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </div>
        <div className="p-4">
          <p>
            Existing user? <a href="/">Login</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default signup;
