import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const welcome = () => {
  const navigate = useNavigate();
  const PageTitle = "Welcome";

  useEffect(() => {
    document.title = PageTitle;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        // const name = user.displayName;
        console.log(uid);
        console.log(email);
        window.alert(`Welcome, ${email}`);

        // console.log(name);
      } else {
        console.log("No user is signed in.");
        navigate("/");
      }
    });
  }, []);
  // const email = user.email;

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        window.alert("User signed out");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="w-96 h-auto p-10 text-1xl justify-center flex flex-col items-start bg-slate-200 border-spacing-3 rounded-xl shadow-xl ">
        <h1 className="text-4xl text-slate-700 items-center p-4 pl-0">
          Welcome{" "}
        </h1>
        <p className="text-sm p-2 pl-0">Succesfully logged in</p>
        <button
          onClick={logout}
          className="text-1xl text-slate-100 bg-slate-900 rounded-lg px-4 py-2 my-4"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default welcome;
