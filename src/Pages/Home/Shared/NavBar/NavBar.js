import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import MyAwesomeThemeComponent from './ToggleTheme';

const NavBar = () => {

    const {user, logOut}= useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
          .then(() => { })
          .catch(err => console.log(err))
      }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/blog'>Blog</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    About
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li><Link to='/'>About Us</Link></li>
                                    <li><Link to='/'>Contact</Link></li>
                                </ul>
                            </li>
                            <li><MyAwesomeThemeComponent></MyAwesomeThemeComponent></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='font-extrabold mr-2'>HK</span> Job Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/blog'>Blog</Link></li>
                        <li tabIndex={0}>
                            <Link>
                               About
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><Link to='/'>About Us</Link></li>
                                <li><Link to='/'>Contact</Link></li>
                            </ul>
                        </li>
                        <li><MyAwesomeThemeComponent></MyAwesomeThemeComponent></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    
                {
      user?.uid ?
        <>
          {/* <li><Link to='/dashboard'>Dashboard</Link></li> */}
          <button onClick={handleLogOut} className="btn">Sign Out</button>
        </>
        : <Link to='/login' className="btn">Login</Link>
    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;