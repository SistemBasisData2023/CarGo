import mainLogo from "/cargo.svg";
import userProfile from "/user.svg";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const NavBar = () => {
  // Profile.authorized = true;

  return (
    <div className="navbar bg-secondary fixed top-0 z-[999]">
      <div className="flex-1">
        <Link to="/" className=" text-textblue">
          <a className="text-xl normal-case btn btn-ghost">
            <div>
              <img src={mainLogo} alt="Cargo" className="w-10" />
            </div>
            CarGo
          </a>
        </Link>
      </div>
      <ul>
        <li className="text-xl text-textblue">
          <Link to="/about" className="px-4 hover:text-gray-500">
            About
          </Link>
          <Link to="/vehicles" className="px-4 hover:text-gray-500">
            Vehicles
          </Link>
        </li>
      </ul>
      <div className="flex-none">
        <div className="pr-4 dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link
                  to="/user"
                  className="text-white btn hover:bg-opacity-90 btn-block bg-buttonblue"
                >
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          {Profile.authorized ? (
            <div className="pr-4 dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={userProfile} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/signIn"
              className="px-4 py-2 m-2 text-white rounded-lg bg-buttonblue hover:text-gray-700 hover:bg-slate-300"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
