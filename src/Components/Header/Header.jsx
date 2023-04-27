import React, { useContext } from "react";
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.email);
  const handleLogOut = () => {
    logOut()
      .then((Result) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-between items-center bg-[#1C2B35] px-28 py-4">
      <img src={Logo} alt="" />
      <div className="flex justify-center items-center lg:gap-12 md:gap-6 gap-4 text-lg text-white">
        <Link to="/" className="hover:text-orange-300">
          Shop
        </Link>
        <Link to="/orders" className="hover:text-orange-300">
          Orders
        </Link>
        <Link to="/inventory" className="hover:text-orange-300">
          Inventory
        </Link>
        {!user && (
          <Link to="/login" className="hover:text-orange-300">
            Login
          </Link>
        )}
        {!user && (
          <Link to="/sign-up" className="hover:text-orange-300">
            Sign up
          </Link>
        )}

        {user && (
          <div className="flex items-center gap-1">
            <p className="text-sm font-medium">{user.email}</p>
            <button
              onClick={handleLogOut}
              className="px-5 py-2 border border-solid rounded-lg border-slate-700 bg-white hover:bg-slate-50 text-lg text-slate-800"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
