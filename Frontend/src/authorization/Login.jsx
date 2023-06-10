import TextInput from "./components/TextInput";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

import mainLogo from "/cargo.svg";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies();

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };
    try {
      const resp = await axios.post("http://localhost:3000/login", user);
      console.log(resp);

      if (resp.data.user) {
        toast.success(resp.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setSuccess(true);

        setCookie("id_user", resp.data.user.id_user, {
          path: "/",
          maxAge: 3600 * 24,
        });
        setCookie("username", resp.data.user.username, {
          path: "/",
          maxAge: 3600 * 24,
        });

        localStorage.setItem("id_user", resp.data.user.id_user);
        localStorage.setItem("username", resp.data.user.username);
      } else {
        toast.error(resp.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setSuccess(false);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setSuccess(false);
    }
  }

  return (
    <motion.div
      className="flex items-center justify-center bg-primary h-screen"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: import.meta.env.VITE_ANIMATION_DURATION },
      }}
    >
      <div className="bg-secondary px-10 py-10 w-fit text-center relative mt-16">
        <a className="inline-flex flex-shrink-0 items-center justify-center text-center normal-case text-xl">
          <div>
            <img src={mainLogo} alt="Cargo" className="w-10" />
          </div>
          <div className="px-2 font-bold text-textblue">CarGo</div>
        </a>
        <p className="text-gray-300">Welcome to CarGo!</p>
        <p className="text-gray-300">Please sign in to continue</p>
        <form onSubmit={handleSubmit}>
          <TextInput
            required={true}
            type="text"
            label={<span className="text-gray-500">Username</span>}
            handle={(event) => setUsername(event.target.value)}
            value={username}
            placeholder="Enter username here"
          />
          <div className="h-2"></div>
          <TextInput
            required={true}
            type={passwordShown ? "text" : "password"}
            label={<span className="text-gray-500">Password</span>}
            handle={(event) => setPassword(event.target.value)}
            value={password}
            placeholder="Your password here"
          />
          <div className="inline-flex flex-shrink-0 items-center justify-center text-center normal-case text-xl">
            <input
              type="checkbox"
              checked={passwordShown}
              className="checkbox checkbox-primary m-4 outline-none"
              onChange={() => setPasswordShown(!passwordShown)}
            />
            <span className="text-sm text-gray-300">Show Password</span>
          </div>
          <div>
            <button
              type="submit"
              className="bg-buttonblue px-4 py-2 rounded-md mx-auto text-gray-300 hover:bg-primary hover:text-gray-600 outline-none border-none"
            >
              Sign In
            </button>
            <ToastContainer />
            <p className="pt-2 text-gray-300">Don&apos;t have an account?</p>
            <Link to="/register" className="text-buttonblue font-bold">
              {" "}
              Register here!{" "}
            </Link>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
