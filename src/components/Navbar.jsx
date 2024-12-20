import React from "react";
import logo from "../assets/helpingBrainsHeal.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ResponsiveMenu from "./ResponsiveMenu";

export const NavBarMenu = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "About Us",
        link: "/about",
    },
    {
        id: 3,
        title: "Donation",
        link: "/donations",
    },
    {
        id: 4,
        title: "Resources",
        link: "/resources",
    },
    {
        id: 5,
        title: "Research",
        link: "/research",
    },
    {
        id: 6,
        title: "Community",
        link: "/communities",
    },
    {
        id: 7,
        title: "Featured",
        link: "/featured",
    },
]

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="z-3 relative select-none">
            <nav className="bg-white shadow-sm fixed w-full z-20 p-4 bg-opacity-80 backdrop-blur-lg">
                <div className="max-w-screen-2xl flex justify-between items-center px-1 md:px-4 mx-auto">
                    {/* logo */}
                    <a href="/">
                        <div className="flex items-center gap-2">
                            <img src={logo} className="h-7" alt="Helping Brains Heal Logo" />
                            <p className="font-satoshiBold text-fontBlack">Helping Brains Heal</p>
                        </div>
                    </a>
                    {/* Menu */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-5 font-satoshiMedium text-primaryBlue">
                            {NavBarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.link}>
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* Mobile menu */}
                    <div className="lg:hidden" onClick={() => setOpen(!open)}>
                        <FontAwesomeIcon icon={faBars} className="text-xl" />
                    </div>
                </div>
            </nav>

            {/* mobile Sidebar */}
            <ResponsiveMenu open={open} setOpen={setOpen} />
        </div>
    );
};

export default Navbar;
