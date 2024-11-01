import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Footer () {
    return (
        <div className='bg-background flex flex-row p-5 justify-between'>
            <div className='w-1/3'>
                <div className='font-satoshiBold'>Helping Brains Heal</div>
                <div className='font-erodeRegular'>Bringing accessible treatment and care packages to support rehabilitation for those with acquired brain injuries (ABI)</div>
                <div className='font-erodeRegular text-lightGrey'>@2024 Helping Brains Heal</div>
            </div>
            <div className='flex flex-col font-satoshiMedium'>
                <div>About</div>
                <div>Treatment Opportunities</div>
                <div>Donate</div>
                <div>News</div>
            </div>
            <div className='font-satoshiMedium'>
                <div>Contact us</div>
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