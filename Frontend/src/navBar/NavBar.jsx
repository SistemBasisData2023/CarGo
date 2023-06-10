import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import axios from 'axios';

import mainLogo from '/cargo.svg';
import userProfile from '/user.svg';

import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
  const navigate = useNavigate();

  const [cookies, removeCookie] = useCookies();

  const handleLogout = () => {
    axios.get('http://localhost:3000/logout'); 
    removeCookie('id_user', { path: '/' });
    removeCookie('username', { path: '/' });
    localStorage.clear();
    navigate(0);
  }

  return (
    <div className="navbar bg-secondary fixed top-0 z-[999]">
      <div className="flex-1">
        <Link to="/" className=' text-textblue'>
          <div className="btn btn-ghost normal-case text-xl">
            <div>
              <img src={mainLogo} alt="Cargo" className='w-10' />
            </div> 
              CarGo
          </div>
        </Link>
      </div>
      <ul>
        <li className='text-xl text-textblue'>
          <Link to='/about' className='px-4 hover:text-gray-500'>About</Link>
          <Link to='/vehicles' className='px-4 hover:text-gray-500'>Vehicles</Link>
        </li>
      </ul>
      <div className="flex-none">
        <div className="dropdown dropdown-end pr-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {
              // cookies.id_user
              localStorage.getItem('id_user') ? (
              <div className="dropdown dropdown-end pr-4">
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
              <Link to='/signIn' className='px-4 py-2 bg-buttonblue m-2 rounded-lg hover:bg-slate-300 duration-500 text-primary'>Sign In</Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default NavBar;
