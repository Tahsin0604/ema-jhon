import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/google.png";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, signUpUsingGmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  console.log(location);
  console.log(from);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from,{replace:true});
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const googleSignUp = () => {
    signUpUsingGmail()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center my-10">
      <div className="w-1/3 border border-solid border-slate-400 rounded-lg py-5 px-12">
        <h1 className="text-3xl font-bold text-slate-700 text-center">Login</h1>
        <form className="mt-4" onSubmit={handleLogin}>
          <div className="form-control">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-input"
            />
          </div>
          <div className="form-control my-2">
            <input type="submit" value="Login" className="form-submit-btn" />
          </div>
          <p className="my-3 text-red-700 text-center font-semibold">{error}</p>
        </form>
        <p className="ml-1 text-slate-600 font-semibold">
          New to Ema-john?
          <Link to="/sign-up" className="text-orange-400 ml-1 hover:underline">
            Create New Account
          </Link>
        </p>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-10/12 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-6 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <p className="text-slate-700 font-semibold text-lg">Or</p>
          </div>
        </div>

        <button
          className="flex justify-center items-center w-full py-2 px-5 border border-solid border-slate-500 rounded-lg gap-2 hover:bg-slate-50"
          onClick={googleSignUp}
        >
          <img src={logo} alt="Google" className="w-6 h-6" />
          <p className="text-slate-700 text-lg font-semibold">
            Continue with Google
          </p>
        </button>
      </div>
    </div>
  );
};

export default Login;
