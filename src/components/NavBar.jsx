import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-none p-4 flex flex-col fixed top-0 right-0 z-20 font-satoshiMedium lg:w-full select-none">
      {/* Hamburger Icon for Medium and Smaller Screens */}
      <div className="lg:hidden flex items-center justify-between z-10">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none bg-transparent">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:flex space-x-4 absolute lg:static top-0 right-0 bg-background lg:bg-transparent shadow-lg lg:shadow-none w-full lg:w-auto`}>
        <div className="flex lg:flex-row flex-col items-start bg-background absolute lg:left-0 lg:pl-5 right-0 shadow-lg w-48 lg:w-auto">
          <a href="/" className="hover:underline p-2">Home</a>
          <a href="/about" className="hover:underline p-2">About Us</a>
          <a href="/clinic" className="hover:underline p-2">Clinic</a>
          <a href="/communities" className="hover:underline p-2">Communities</a>
          <a href="/donations" className="hover:underline p-2">Donations</a>
          <a href="/news" className="hover:underline p-2">News</a>
          <a href="/opportunities" className="hover:underline p-2">Opportunities</a>
        </div>
      </div>
    </nav>
  );
}
