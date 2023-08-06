import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/welcome");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // function login() {
  return (
    <>
      <main>
        <div className="w-96 p-8 text-1xl justify-center flex flex-col items-start bg-slate-200 border-spacing-3 h-80 rounded-xl shadow-xl ">
          <h1 className="text-3xl text-slate-700 items-center px-28 pt-8">
            Login
          </h1>
          <form className="p-4">
            <label htmlFor="email" className="text-slate-800 p-1">
              E-mail:
            </label>
            <input
              className="w-full bg-slate-100 shadow-lg text-slate-900 p-1 mb-4"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label htmlFor="password" className="text-slate-800 p-1 ">
              Password:
            </label>
            <input
              className="w-full bg-slate-100 shadow-lg text-slate-900 p-1 mb-2"
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
              className="text-1xl text-slate-100 bg-slate-900 rounded-lg px-4 py-2 my-4"
              onClick={onLogin}
            >
              Login
            </button>
          </form>
        </div>
        <div className="p-4 text-white font-semibold">
          <p>
            New User?{" "}
            <a href="/signup" className="text-blue-900">
              Sign Up
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default login;
