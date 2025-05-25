import React from "react";
import logo from "../assets/helpingBrainsHeal.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
import { NavBarMenu } from "../config/config";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="z-3 relative select-none">
            <nav className="bg-white shadow-sm fixed w-full z-20 p-4 bg-opacity-80 backdrop-blur-lg">
                <div className="max-w-screen-2xl flex justify-between items-center px-1 md:px-4 mx-auto">
                    {/* Logo */}
                    <Link to="/">
                        <div className="flex items-center gap-2">
                            <img src={logo} className="h-7" alt="Helping Brains Heal Logo" />
                            <p className="font-satoshiBold text-fontBlack">Helping Brains Heal</p>
                        </div>
                    </Link>
                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-5 font-satoshiMedium text-primaryBlue">
                            {NavBarMenu.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden" onClick={() => setOpen(!open)}>
                        <FontAwesomeIcon icon={faBars} className="text-xl" />
                    </div>
                </div>
            </nav>

            {/* Responsive Menu */}
            <ResponsiveMenu open={open} setOpen={setOpen} />
        </div>
    );
};

export default Navbar;