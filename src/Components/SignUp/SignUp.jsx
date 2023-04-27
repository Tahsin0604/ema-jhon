import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/google.png";
import { AuthContext } from "../../providers/AuthProviders";

const SignUp = () => {
  const [error, setError] = useState("");
  const { user, createUser, signUpUsingGmail } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    setError('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);
    if (password !== confirm) {
      setError("Password did not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const googleSignUp = () => {
    signUpUsingGmail()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center my-6">
      <div className="w-1/3 border border-solid border-slate-400 rounded-lg py-5 px-12">
        <h1 className="text-3xl font-bold text-slate-700 text-center">
          Sign Up
        </h1>
        <form className="mt-4" onSubmit={handleSignUp}>
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
          <div className="form-control">
            <label htmlFor="confirm" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              className="form-input"
            />
          </div>
          <div className="form-control my-2">
            <input type="submit" value="Sign Up" className="form-submit-btn" />
          </div>
          <p className="my-3 text-red-700 text-center font-semibold">{error}</p>
        </form>
        <p className="ml-1 text-slate-600 font-semibold">
          Already have an account?
          <Link to="/login" className="text-orange-400 ml-1 hover:underline">
            Login
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

export default SignUp;
