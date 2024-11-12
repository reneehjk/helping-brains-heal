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
        title: "Oppurtunities",
        link: "/opportunities",
    },
    {
        id: 5,
        title: "Clinic",
        link: "/clinic",
    },
    {
        id: 6,
        title: "Community",
        link: "/communities",
    },
    {
        id: 7,
        title: "News",
        link: "/news",
    },
]

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <nav className="bg-white shadow-sm fixed w-full z-20 p-4 bg-opacity-80 backdrop-blur-lg">
                <div className="max-w-screen-2xl flex justify-between items-center px-1 md:px-4 mx-auto">
                    {/* logo */}
                    <div className="flex items-center gap-2">
                        <img src={logo} className="h-8" alt="Helping Brains Heal Logo" />
                        <p className="md:hidden font-satoshiBold text-fontBlack">Helping Brains Heal</p>
                        <p className="hidden md:block font-satoshiBold text-fontBlack">HBH</p>
                    </div>
                    {/* Menu */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6 font-satoshiMedium text-primaryBlue">
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
                    <div className="md:hidden" onClick={() => setOpen(!open)}>
                        <FontAwesomeIcon icon={faBars} className="text-xl" />
                    </div>
                </div>
            </nav>

            {/* mobile Sidebar */}
            <ResponsiveMenu open={open} />
        </>
    );
};

{/* <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About Us</a>
        <a href="/donations" className="hover:underline">Donations</a>
        <a href="/news" className="hover:underline">News</a>
        <a href="/opportunities" className="hover:underline">Opportunities</a>
        <a href="/clinic" className="hover:underline">Clinic</a>
        <a href="/communities" className="hover:underline">Communities</a> */}

// <div className="bg-background p-4 space-x-4 fixed top-0 left-0 z-20 shadow-sm font-satoshiMedium w-full">

export default Navbar