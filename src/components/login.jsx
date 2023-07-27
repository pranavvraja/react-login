import signup from "./signup";

function login() {
  return (
    <>
      <div className="text-1xl justify-center items-center bg-slate-200 border-spacing-3 p-6 h-80 rounded-xl shadow-xl">
        <h1 className="text-slate-700">Login</h1>
        <label className="text-slate-800">E-mail:</label>
        <input
          className="bg-slate-100 shadow-lg text-slate-900"
          type="text"
        ></input>
        <label className="text-slate-800">Password:</label>
        <input
          className="bg-slate-100 shadow-lg text-slate-900"
          type="password"
        ></input>
        <input
          className="text-1xl bg-slate-900 rounded-lg p-2 m-4"
          type="submit"
        ></input>
      </div>
      <div className="p-4">
        <p>
          New User?<a>Sign Up</a>
        </p>
      </div>
    </>
  );
}

export default login;
