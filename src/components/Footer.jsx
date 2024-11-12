import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-background  border-t-2 border-x-0">
            <div className="mx-auto w-full max-w-screen-2xl px-5 md:px-10 py-20">
                <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-44">
                    {/* Left Section */}
                    <div className="md:w-1/3 mb-6 md:mb-0">
                        <div className="font-satoshiBold text-2xl text-primaryBlue mb-3">Helping Brains Heal</div>
                        <div className="font-erodeRegular mb-1">
                            Bringing accessible treatment and care packages to support rehabilitation for those with acquired brain injuries (ABI)
                        </div>
                        <div className="font-erodeRegular text-black opacity-40 mt-2 md:mt-0">@2024 Helping Brains Heal</div>
                    </div>

                    {/* Center Section */}
                    <div className="flex flex-col font-satoshiMedium mt-4 md:mt-0 space-y-2 text-center md:text-left">
                        <div>About</div>
                        <div>Treatment Opportunities</div>
                        <div>Donate</div>
                        <div>News</div>
                    </div>

                    {/* Right Section */}
                    <div className="font-satoshiMedium mt-8 md:mt-0 text-center md:text-left">
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="hover:underline">Email</a>
                            <a href="#" className="hover:underline">LinkedIn</a>
                            <a href="#" className="hover:underline">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

