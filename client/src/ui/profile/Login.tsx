import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import Label from "./Label";
import Loading from "../Loading";

const Login = ({ setLogin }: any) => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const { email, password }: any = Object.fromEntries(formData);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      let errorMessage;
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No user found with this email.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Email or Password not matched";
          break;
        // Add more cases as needed
        default:
          errorMessage = "An error occurred. Please try again.";
      }
      console.log("Error", error);
      setErrMsg(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-gray-950 pb-10 rounded-lg">
      <form
        onSubmit={handleLogin}
        className="max-w-5xl mx-auto py-10 px-10 lg:px-0"
      >
        <div className="border-b border-white/10 pb-5">
          <h2 className="text-lg font-semibold uppercase leading-7 text-white">
            Sign in
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Please sign in to continue
          </p>
        </div>

        <div className="border-b border-white/10 pb-5">
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="col-span-2 md:col-span-1">
              <Label title="Email address" />
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Label title="Password" />
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        {errMsg && (
          <p className="bg-white/90 text-red-600 text-center py-1 rounded-md tracking-wide font-semibold">
            {errMsg}
          </p>
        )}

        <button
          type="submit"
          className="mt-5 bg-indigo-700 w-full py-2 uppercase text-base font-bold tracking-wide text-gray-300 rounded-md hover:text-white hover:bg-indigo-600 duration-200"
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
      </form>

      <p className="text-sm leading-6 text-gray-400 text-center -mt-2">
        Does not have an Account{" "}
        <button
          onClick={() => setLogin(false)}
          className="text-gray-200 font-semibold underline underline-offset-2 decoration-[1px] hover:text-white duration-200"
        >
          Register
        </button>
      </p>
      {loading && <Loading />}
    </div>
  );
};

export default Login;
