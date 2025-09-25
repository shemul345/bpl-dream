import React from 'react';
import navImg from '../../assets/logo.png';
import bannerMain from '../../assets/banner-main.png';
import bannerBg from '../../assets/banner-bg.png';

const Header = () => {
    return (
        <div>
            {/* header section start */}
      <header className='max-w-5/6 mx-auto'>
        {/* navbar start */}
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Fixture</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
      </ul>
    </div>
    <a className="w-[100px] h-[100px]"><img src={navImg} alt="" /></a>
  </div>
    <div className="navbar-end lg:flex gap-10">
      <ul className="menu menu-horizontal px-1 lg:flex gap-5 text-lg text-gray-500">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
    <a className="text-lg">$<span>160000000</span></a>
  </div>
        </div>
        {/* navbar end */}
        {/* banner section start */}
        <section className='rounded-2xl' style={{
          backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}>
          <div className='text-white flex flex-col items-center justify-center p-16 '>
            <img className='' src={bannerMain} alt="" />
            <h1 className='text-4xl font-bold p-5'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-xl text-[#ffffff90]'>Beyond Boundaries Beyond Limits</p>
            <button className='border border-[#E7FE29] p-3 rounded-lg mt-5'><span className='bg-[#E7FE29]  text-black font-bold py-2 px-3 rounded-lg'>Claim Free Credit</span></button>
        </div>
        </section>
      {/* banner section end */}
        
      </header>
      {/* header section end */}
        </div>
    );
};

export default Header;