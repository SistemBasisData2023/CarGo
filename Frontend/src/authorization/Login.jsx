import TextInput from "./components/TextInput";
import { useState } from "react";
import mainLogo from '/cargo.svg';
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault(); 

    // const params = new URLSearchParams();
    // params.append('username', username);
    // params.append('password', password);

    const resp = await axios.post('http://localhost:3000/login', { username: username, password: password });

    console.log(resp.data.user);
  }

  return (
    <div className="flex items-center justify-center bg-primary h-screen">
      <div className="bg-secondary px-10 py-10 w-fit text-center relative mt-16">
        <a className="inline-flex flex-shrink-0 items-center justify-center text-center normal-case text-xl">
          <div>
            <img src={ mainLogo } alt="Cargo" className='w-10' />
          </div>
          <div className="px-2 font-bold text-textblue">
            CarGo
          </div>
        </a>
        <p>
          Welcome to CarGo!
        </p>
        <p>
          Please sign in to continue.
        </p>
        <form onSubmit={handleSubmit}>
          <TextInput type="text" label="Username" handle={event => setUsername(event.target.value)} value={username} placeholder="Enter username here" />
          <TextInput type={passwordShown ? "text" : "password"} label="Password" handle={event => setPassword(event.target.value)} value={password} placeholder="Your password here" />
          <div className="inline-flex flex-shrink-0 items-center justify-center text-center normal-case text-xl">
            <input type="checkbox" checked={passwordShown} className="checkbox checkbox-primary m-4" onChange={() => setPasswordShown(!passwordShown)} />
            <span className="text-sm">Show Password</span>
          </div>
          <div>
            <button type="submit" className=" bg-buttonblue px-2 py-1 rounded-xl mx-auto text-primary hover:bg-slate-300 duration-500">Sign In</button>
            <p className="pt-2">Don&apos;t have an account?</p>
            <Link to="/signUp" className="text-indigo-600 font-bold"> Register here! </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;