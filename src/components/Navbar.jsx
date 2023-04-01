import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants'
import {styles}   from '../styles';
import {logo, menu, close } from '../assets' 
import   {motion} from 'framer-motion'
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
}
  

const Navbar = () => {
  const [active, setActive] = useState('');
  const [tolggle, setTolggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex itmes-center py-5 fixed top-0 z-20`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'> 
      <Link
      to="/"
      className='flex items-center gap-2'
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
      >
      <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="h-8 w-8 bg-[#915EFF] p-1 rounded-sm"
  >
    <motion.path
      d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
      variants={icon}
      initial="hidden"
      animate="visible"
    />
  </svg>
      <p className="text-white text-[18px] font-bold cursor-pointer flex">FoUad &nbsp; 
      <span className="sm:block hidden"> |  JS Mastery</span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={tolggle ?  close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setTolggle(!tolggle)}
          />
          <div className={`${!tolggle ? 'hidden': 'flex'} p-6 black-gradient absolute
          top-12 right-0 mx-4 my-2 min-w-[14px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } font-poppins text-[16px] font-medium cursor-pointer`}
              onClick={() => {
                setTolggle(!tolggle)
                setActive(nav.title)}}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

          </div>
        </div>
        
      </div>
      
    </nav>
  )                              
}

export default Navbar                                                                                    