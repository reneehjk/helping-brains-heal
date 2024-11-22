import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

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
                        className="fixed top-[64px] right-0 w-full bg-white shadow-sm z-20 md:hidden"
                    >
                        <div className="text-lg font-satoshiBold text-fontBlack py-10">
                            <ul className="flex flex-col justify-center items-center gap-5">
                                <li key={1} className="hover:underline"><a href="/">Home</a></li>
                                <li key={2} className="hover:underline"><a href="/about">About Us</a></li>
                                <li key={3} className="hover:underline"><a href="/donations">Donation</a></li>
                                <li key={4} className="hover:underline"><a href="/resources">Resources</a></li>
                                <li key={5} className="hover:underline"><a href="/research">Research</a></li>
                                <li key={6} className="hover:underline"><a href="/communities">Community</a></li>
                                <li key={7} className="hover:underline"><a href="/featured">Featured</a></li>
                            </ul>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;
