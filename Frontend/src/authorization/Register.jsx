import TextInput from "./components/TextInput";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useCookies } from "react-cookie";
import {FaUserPlus} from 'react-icons/fa';

import axios from "axios";
import DatePicker from 'react-datepicker';

import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";


const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [cookies, setCookie] = useCookies();

  const navigate = useNavigate();

  useEffect(() => {
    if(success){
      navigate('/');
    }
  }, [success, navigate]);

  async function handleSubmit(e) {
    e.preventDefault(); 

    const user = {
      username: username,
      password: password,
      email: email,
      phone_no: phone,
      name: name,
      birth_date: birthDate,
      address: address,
    }

    try{
      const resp = await axios.post('http://localhost:3000/register', user).catch();

      if(resp.data.user){
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

        setCookie('id_user', resp.data.user.id_user, { path: '/' });
        setCookie('username', resp.data.user.username, { path: '/' });

        localStorage.setItem('id_user', resp.data.user.id_user);
        localStorage.setItem('username', resp.data.user.username);

      }else{
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

    }catch(err){
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
    <form onSubmit={handleSubmit} className="items-center justify-center bg-primary h-screen grid grid-rows-3">
      <div>
        <div className="bg-secondary w-full py-4 text-center relative mt-16 items-center">
          <a className="inline-flex flex-shrink-0 items-center justify-center text-center normal-case text-xl">
            <div>
              <FaUserPlus className="text-buttonblue"/>
            </div>
            <div className="px-2 font-bold text-textblue">
              Register
            </div>
          </a>
          <p className="text-textblue">
            Enter your credentials to create an account
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-2 bg-secondary px-10 py-5 w-fit text-center relative mt-16 gap-x-6 gap-y-2">
          <TextInput required={true} type="text" label="Username" handle={event => setUsername(event.target.value)} value={username} placeholder="Enter username here" />
          <TextInput required={true} type="tel" label="Phone Number" handle={event => setPhone(event.target.value)} value={phone} placeholder="Enter username here" />
          <TextInput required={true} type="email" label="Email" handle={event => setEmail(event.target.value)} value={email} placeholder="Enter email here" />
          <TextInput required={true} type="text" label="Name" handle={event => setName(event.target.value)} value={name} placeholder="Enter name here" />
          <TextInput required={true} type={passwordShown ? "text" : "password"} label="Password" handle={event => setPassword(event.target.value)} value={password} placeholder="Enter password here" />
          <TextInput required={true} type="text" label="Address" handle={event => setAddress(event.target.value)} value={address} placeholder="Enter address here" />
          <div className="inline-flex flex-shrink-0 items-center justify-center text-center normal-case text-xl">
            <input type="checkbox" checked={passwordShown} className="checkbox checkbox-primary m-4" onChange={() => setPasswordShown(!passwordShown)} />
            <span className="text-sm text-textblue">Show Password</span>
          </div>          
          <div className="text-left mt-3 mb-4 text-textblue">
            <span>Date of Birth</span>
            <DatePicker
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className="bg-secondary"
              required="true"
            />
            {/* <DatePicker showIcon="true" required="true" dateFormat="MMMM d, yyyy" selected={birthDate} onChange={(date) => setBirthDate(date)} className="mt-1 text-primary rounded-md" placeholderText="Month Date, Year"/> */}
          </div>
        </div>
      </div>
      <div className="bg-secondary px-10 py-4 w-full text-center relative mt-20">
        <button type="submit" className=" bg-buttonblue px-3 py-2 rounded-md mx-auto hover:bg-primary hover:text-gray-600 outline-none border-none text-textblue">Sign Up</button>
        <ToastContainer />
      </div>
    </form>
  )
}

export default Register;