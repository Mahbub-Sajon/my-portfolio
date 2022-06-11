import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = <>

  <li><Link to="/">HOME</Link></li>
  <li><Link to="/about">ABOUT</Link></li>
  <li><Link to="">SERVICES</Link></li>
  <li><Link to="">SKILLS</Link></li>
  <li><Link to="/projects">PROJECTS</Link></li>
  <li><Link to="/">BLOG</Link></li>
  <li><a className=' ml-10 btn bg-base-400' href="https://drive.google.com/drive/folders/1Sj00rFjLAAhUvCuJ7yPzbL5a13wgVV7Z">DOWNLOAD RESUME</a></li>
</>
return (
  <div className='sticky top-0 z-50'>
      <div className="navbar bg-primary text-white">
          <div className=" navbar-start">
              <div className="  dropdown">
                  <label tabindex="0" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabindex="0" className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-primary rounded-box w-52">
                      {menuItems}
                  </ul>
              </div>
              <Link 
               to="/" className="btn btn-ghost normal-case font-bold text-xl">SAJ<span className='text-green-500'>ON</span></Link>
          </div>
          <div className="  navbar-center hidden md:flex  lg:flex">
              <ul className="sticky menu menu-horizontal p-0 w-full">
                  {menuItems}
              </ul>
          </div>
          <div className='navbar-end'>
         
         

          </div>
      </div>
  </div>
);
};

export default Navbar;