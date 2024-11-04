import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Footer () {
    return (
        <div className='bg-background flex flex-row p-5 space-x-44 border-black border-y-2 border-x-0'>
            <div className='w-1/3'>
                <div className='font-satoshiMedium text-xl text-primaryBlue mb-3'>Helping Brains Heal</div>
                <div className='font-erodeRegular mb-1'>Bringing accessible treatment and care packages to support rehabilitation for those with acquired brain injuries (ABI)</div>
                <div className='font-erodeRegular text-lightGrey'>@2024 Helping Brains Heal</div>
            </div>
            <div className='flex flex-col font-satoshiMedium mt-4'>
                <div>About</div>
                <div>Treatment Opportunities</div>
                <div>Donate</div>
                <div>News</div>
            </div>
            <div className='font-satoshiMedium'>
                <div className='text-xl text-primaryBlue mb-3'>Contact us</div>
                <div className='flex flex-col'>
                    <a>Email</a>
                    <a>LinkedIn</a>
                    <a>Instagram</a>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;