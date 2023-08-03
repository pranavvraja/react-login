import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// import signup from "./signup";

function login() {
  return (
    <>
      <div className="w-96 p-8 text-1xl justify-center flex flex-col items-start bg-slate-200 border-spacing-3 h-80 rounded-xl shadow-xl ">
        <h1 className="text-3xl text-slate-700 items-center px-28">Login</h1>

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
          className="text-1xl text-slate-100 bg-slate-900 rounded-lg px-4 py-2 my-4"
          type="submit"
          value={"Login"}
        ></input>
      </div>
      <div className="p-4 text-white font-semibold">
        <p>
          New User?{" "}
          <a href="/signup" className="text-blue-900">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
}

export default login;
