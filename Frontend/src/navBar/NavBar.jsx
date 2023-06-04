import mainLogo from '/vite.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <>
      <div className="shadow-md w-full absolute top-0 left-0 right-0">
        <div className="md:flex items-center justify-between bg-white py-1 md:px-6 px-8">
          <div className='font-bold cursor-pointer flex item-center text-3xl'>
            <Link to="/">
              <img src={mainLogo} alt="Cargo" width={50}/>
            </Link>
            <Link to="/" className='pl-4 pt-2'>
              CarGo
            </Link>
          </div>
          <ul>
            <li className='text-xl'>
              <Link to='/about' className='px-4 hover:text-gray-500'>About</Link>
              <Link to='/vehicles' className='px-4 pr-8 hover:text-gray-500'>Vehicles</Link>
              <Link to='/signIn' className='px-4 bg-slate-500 py-2 rounded-lg hover:text-gray-700 hover:bg-slate-300'>Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar;
