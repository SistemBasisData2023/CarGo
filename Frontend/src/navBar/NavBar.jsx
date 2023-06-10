import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {TbUserCircle} from "react-icons/tb";

import axios from "axios";

import mainLogo from "/cargo.svg";

import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies();

  const handleLogout = () => {
    axios.get("http://localhost:3000/logout");
    setCookies("id_user", "0", { path: "/" });
    setCookies("username", "0", { path: "/" });
    localStorage.clear();
    navigate(0);
  };

  return (
    <div className="navbar bg-secondary fixed top-0 z-10 grid grid-cols-6 w-screen py-0 h-16">
      <div className="w-fit h-full mx-auto group hover:border-t hover:border-gray-200 my-0 cursor-pointer transition-all duration-300">
        <Link
          to="/about"
          className="group-hover:text-gray-500 text-textblue transition-all duration-300"
        >
          About
        </Link>
      </div>
      <div className="w-fit h-full mx-auto group hover:border-t hover:border-gray-200 my-0 cursor-pointer transition-all duration-300">
        <Link
          to="/vehicles"
          className="group-hover:text-gray-500 text-textblue transition-all duration-300"
        >
          Vehicles
        </Link>
      </div>
      <Link to="/" className=" text-textblue col-span-2 mx-auto">
        <div className="btn btn-ghost normal-case text-xl rounded-none">
          <div>
            <img src={mainLogo} alt="Cargo" className="w-10" />
          </div>
          CarGo
        </div>
      </Link>
      <div className="w-fit h-full mx-auto group hover:border-t hover:border-gray-200 my-0 cursor-pointer transition-all duration-300">
        <Link
          to="/orders"
          className="group-hover:text-gray-500 text-textblue transition-all duration-300"
        >
          Orders
        </Link>
      </div>
      <div className="w-fit h-full mx-auto group hover:border-t hover:border-gray-200 my-0 cursor-pointer transition-all duration-300">
        {cookies.id_user !== "0" ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <TbUserCircle className="text-textblue text-3xl"/>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="hover:bg-transparent font-bold">{localStorage.getItem("username")}</div>
              </li>
              <li>
                <div onClick={handleLogout}>Logout</div>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="group-hover:text-gray-500 text-textblue transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
