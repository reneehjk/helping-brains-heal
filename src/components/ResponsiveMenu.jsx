import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'

const ResponsiveMenu = ({ open }) => {
    return (
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-[64px] shadow-sm right-0 w-full z-10 md:hidden"
                >
                    <div className='text-lg font-satoshiBold bg-white text-fontBlack py-10'>
                        <ul className='flex flex-col justify-center items-center gap-5'>
                            <li key={1} className='hover:underline'><a href="/">Home</a></li>
                            <li key={2} className='hover:underline'><a href="/about">About Us</a></li>
                            <li key={3} className='hover:underline'><a href="/donations">Donation</a></li>
                            <li key={4} className='hover:underline'><a href="/opportunities">Oppurtunities</a></li>
                            <li key={5} className='hover:underline'><a href="/clinic">Clinic</a></li>
                            <li key={6} className='hover:underline'><a href="/communities">Community</a></li>
                            <li key={7} className='hover:underline'><a href="/news">News</a></li>
                        </ul>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ResponsiveMenu;
