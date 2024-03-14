import React from "react";

function Register() {
  return (
    <div className="login w-screen h-screen bg-[#f0f2f5] flex items-center justify-center">
      <div className="loginWrapper w-3/4 h-3/4 flex">
        <div className="loginLeft flex-1 flex flex-col justify-center">
          <h3 className="loginLogo text-5xl font-extrabold text-[#1775ee] mb-2">
            ChatBook
          </h3>
          <span className="loginDesc  text-2xl">
            Connect with friends and the world around you on ChatBook.
          </span>
        </div>
        <div className="loginRight flex-1 flex flex-col justify-center">
          <div className="loginBox  h-74 p-5 bg-white rounded-xl flex flex-col justify-between">
            <input
              placeholder="Username"
              className="loginInput p-5 h-12 rounded-xl border-1 border-gray-300 text-lg focus:outline-none"
            />
            <input
              placeholder="Email"
              className="loginInput h-12 rounded-xl border-1 border-gray-300 text-lg p-5 focus:outline-none"
            />
            <input
              placeholder="Password"
              className="loginInput h-12 rounded-xl border-1 border-gray-300 text-lg p-5 focus:outline-none"
            />
            <input
              placeholder="Password Again"
              className="loginInput h-12 rounded-xl border-1 border-gray-300 text-lg p-5 focus:outline-none"
            />
            <span className="loginForgot text-center text-[#1775ee] cursor-pointer">
              Forget Password?
            </span>
            <button className="loginButton mb-2 mt-2 h-12 rounded-xl border-none bg-[#1775ee] text-white text-xl font-medium cursor-pointer">
              Sign Up
            </button>
            <button className="loginRegisterButton w-3/5 self-center h-12 rounded-xl border-none bg-[#42b72a] text-white text-xl font-medium cursor-pointer">
              Log in to Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
