"use client";

import React, { useState } from "react";
import GoogleIcon from "./GoogleIcon";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const supabase = createClient();

export type User = {
  aud?: string;
  confirmed_at?: string;
  created_at?: string;
  email?: string;
  email_confirmed_at?: string;
  id: string;
  is_anonymous?: boolean;
  role?: string;
};

type Props = {
  user: User | null;
};

const Login = (props: Props) => {
  const [user, setUser] = useState(props.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    // success
    if (data.user) {
      alert("Successfully logged in!!!");
      (document.getElementById("sign") as HTMLDialogElement).close();
      setUser(data.user);
      router.refresh();
    }

    if (error) {
      alert(error.message);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    (document.getElementById("signout") as HTMLDialogElement).close();
    router.refresh();
  }

  return (
    <div className="flex-row flex items-center gap-2">
      {user ? (
        <button
          className="w-12 h-12 bg-gray-600 rounded-full capitalize flex justify-center items-center "
          onClick={() =>
            (
              document.getElementById("signout") as HTMLDialogElement
            ).showModal()
          }
        >
          {user.email?.[0]}
        </button>
      ) : (
        <button
          className="text-gray-500"
          onClick={() =>
            (document.getElementById("sign") as HTMLDialogElement).showModal()
          }
        >
          Login
        </button>
      )}

      <dialog id="signout" className="modal">
        <div className="modal-box bg-gray-100 gap-8 flex flex-col justify-center p-16 ">
          <div>
            <label htmlFor="" className="text-gray-700">
              Email
            </label>
            <input
              type="text"
              className="bg-transparent border-gray-300 border-[1px] rounded-lg	py-2 px-6 w-full text-gray-700 outline-none"
              placeholder="Email Address"
              value={user?.email}
              disabled
            />
          </div>
          <button
            className=" bg-gray-700 rounded-lg	py-2 px-6 w-full"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog id="sign" className="modal">
        <div className="modal-box bg-gray-100 gap-8 flex flex-col justify-center p-16">
          <h6 className="font-bold text-lg text-gray-700">
            Sign in or create an account
          </h6>
          <form onSubmit={signInWithEmail} className="flex flex-col gap-4">
            <input
              type="text"
              className="bg-transparent border-gray-300 border-[1px] rounded-lg	py-2 px-6 w-full text-gray-700 outline-none"
              placeholder="Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              className="bg-transparent border-gray-300 border-[1px] rounded-lg	py-2 px-6 w-full outline-none text-gray-700"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              className=" bg-gray-700 rounded-lg	py-2 px-6 w-full"
              type="submit"
            >
              Continue
            </button>
          </form>
          <div className="flex flex-row items-center">
            <div className="border-gray-200 border-[1px] flex-1 h-0"></div>
            <div className="px-4 text-gray-500">or</div>
            <div className="border-gray-200 border-[1px] flex-1 h-0"></div>
          </div>

          <button
            disabled
            className="border-gray-300 border-[1px] bg-transparent rounded-lg	py-2 px-6 w-full flex flex-row gap-2 items-center justify-center "
          >
            <GoogleIcon className="w-6 h-6" disabled />
            <div className="text-gray-200 ">Sign in with Google</div>
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
