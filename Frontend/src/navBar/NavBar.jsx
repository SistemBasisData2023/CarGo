import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import axios from 'axios';

import mainLogo from '/cargo.svg';
import userProfile from '/user.svg';

import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies();

  const handleLogout = () => {
    axios.get('http://localhost:3000/logout'); 
    setCookies('id_user', '0', { path: '/' });
    setCookies('username', '0', { path: '/' });
    localStorage.clear();
    navigate(0);
  }

  return (
    <grid className="navbar bg-secondary fixed top-0 z-[999] grid grid-cols-6 w-screen">
      <Link to='/about' className='px-4 hover:text-gray-500 text-textblue col-span-1 hover:border-t-2 mr-auto pt-2'>About</Link>
      <Link to='/vehicles' className='px-4 hover:text-gray-500 text-textblue col-span-1 hover:border-t-2 mr-auto pt-2'>Vehicles</Link>
      <div className="flex-1 col-span-2 mx-auto">
        <Link to="/" className=' text-textblue'>
          <div className="btn btn-ghost normal-case text-xl">
            <div>
              <img src={mainLogo} alt="Cargo" className='w-10' />
            </div> 
              CarGo
          </div>
        </Link>
      </div>
      <Link to='/orders' className='px-4 hover:text-gray-500 text-textblue col-span-1 ml-auto hover:border-t-2 pt-2'>Orders</Link>
      <div className='col-span-1'>
        {
            cookies.id_user !== '0' ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={userProfile} />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><div>{localStorage.getItem("username")}</div></li>
                <li><Link to='/profile'><div className="justify-between">Profile</div></Link></li>
                <li><div onClick={handleLogout}>Logout</div></li>
              </ul>
            </div>
          ) : (
            <div className='ml-auto mr-6'>
              <Link to='/signIn' className='px-4 py-2 bg-buttonblue my-2 rounded-lg hover:bg-slate-300 duration-500 text-primary'>Sign In</Link>
            </div>
          )
        }
      </div>
    </grid>
  )
}

export default NavBar;
