import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { NavBarMenu } from "../config/config";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open, setOpen }) => {
    return (
        <AnimatePresence mode="wait">
            {open && (
                <>
                    {/* Background Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
                        onClick={() => setOpen(false)}
                    />

                    {/* Dropdown Menu */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-[60px] right-0 w-full bg-white shadow-sm z-20 lg:hidden"
                    >
                        <div className="text-lg font-satoshiBold text-fontBlack py-10">
                            <ul className="flex flex-col justify-center items-center gap-5">
                                {NavBarMenu.map((item) => (
                                    <li key={item.id} className="hover:underline">
                                        <Link to={item.link} onClick={() => setOpen(false)}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;