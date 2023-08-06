import { useState } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Welcome from "./components/welcome";

function App() {
  return (
    <Router>
      <div>
        <div className="w-full flex flex-col items-center justify-center overflow-hidden h-screen bg-gray-500 p-0 m-0">
          <section>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/welcome" element={<Welcome />} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
