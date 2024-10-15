"use client";

import React from "react";
import GoogleIcon from "./GoogleIcon";

const Login = () => {
  return (
    <div className="flex-row flex items-center gap-2">
      <div className="w-12 h-12 bg-slate-800 rounded-full"></div>
      <button
        className="text-gray-500"
        onClick={() =>
          (document.getElementById("sign") as HTMLDialogElement).showModal()
        }
      >
        Login
      </button>

      <dialog id="sign" className="modal">
        <div className="modal-box bg-gray-100 gap-8 flex flex-col justify-center p-16">
          <h6 className="font-bold text-lg text-gray-700">
            Sign in or create an account
          </h6>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="bg-transparent border-gray-300 border-[1px] rounded-lg	py-2 px-6 w-full text-gray-700 outline-none"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="bg-transparent border-gray-300 border-[1px] rounded-lg	py-2 px-6 w-full outline-none text-gray-700"
              placeholder="Password"
            />
            <button className=" bg-gray-700 rounded-lg	py-2 px-6 w-full">
              Continue
            </button>
          </div>
          <div className="flex flex-row items-center">
            <div className="border-gray-200 border-[1px] flex-1 h-0"></div>
            <div className="px-4 text-gray-500">or</div>
            <div className="border-gray-200 border-[1px] flex-1 h-0"></div>
          </div>

          <button className="border-gray-300 border-[1px] bg-transparent rounded-lg	py-2 px-6 w-full flex flex-row gap-2 items-center justify-center">
            <GoogleIcon className="w-6 h-6" />
            <div className="text-gray-700 ">Sign in with Google</div>
          </button>
          <div className="text-gray-700 text-center	">
            By signing in or creating an account, you agree with our Terms &
            Conditions and Privacy Statement
          </div>
          {/* <p className="py-4">Press ESC key or click outside to close</p> */}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Login;
