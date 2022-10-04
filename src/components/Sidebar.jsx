import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';

import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {
      links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className="flex flex-row justify-start itames-center my-8 text-small font-medium text-gray-400 hover:text-white"
          onClick={() => handleClick && handleClick()}
        >
          <link.icon className="w-6 h-6 mr-2" />
          {link.name}
        </NavLink>
      ))
    }
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-neutral-900">
        <h1 className="font-semibold text-white text-2xl">Mysik</h1>
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3 ">
        {
          mobileMenuOpen ? (
            <RiCloseLine
              className="w-6 h-6 text-white mr-2"
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <HiOutlineMenu
              className="w-6 h-6 text-white mr-2"
              onClick={() => setMobileMenuOpen(true)}
            />
          )
        }
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-2-tl from-white/10 to-amber-600 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <h1 className="font-semibold text-white text-2xl">Mysik</h1>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
