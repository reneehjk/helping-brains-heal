import logo from "../assets/helpingBrainsHeal.svg";
import NewsItem from "../components/NewsItemsAbout";
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="min-h-screen bg-background flex flex-col justify-start lg:p-24 lg:space-y-16 py-16 px-10 space-y-6 select-none overflow-hidden">
            <div className="flex items-end lg:space-x-12 space-x-3 lg:pb-24">
                <img src={logo} className="grayscale lg:w-20 lg:h-20 w-10 h-10 self-center" alt="Helping Brains Heal Logo" />
                <div className="font-satoshiBold lg:text-5xl md:text-3xl text-2xl">
                    About Helping Brains Heal
                </div>
            </div>

            <div className="font-satoshiBold lg:text-4xl md:text-2xl text-xl">Overview</div>

            <div className="flex flex-col lg:mx-48">
                <div className="flex justify-self-start font-satoshiBold lg:text-xl md:text-lg text-md">Our Mission</div>

                <div className="flex self-center font-erodeRegular lg:text-base md:text-sm text-xs text-center mt-3 lg:pb-24">
                    Lorem ipsum dolor sit amet, co amet, co amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.r incididunt ut labore et dolore magna aliqua. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.r incididunt ut labore et dolore magna aliqua. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.r incididunt ut labore et dolore magna aliqua. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                </div>
            </div>

            <div className="font-satoshiBold lg:text-4xl md:text-2xl text-xl">Gallery</div>
            <div className="flex flex-row flex-wrap justify-between lg:pb-24">
                <img src={logo} className="lg:w-1/3 w-1/2"/> 
                <img src={logo} className="lg:w-1/3 w-1/2"/> 
                <img src={logo} className="lg:w-1/3 w-1/2"/> 
                <img src={logo} className="lg:w-1/3 w-1/2"/>
                <img src={logo} className="lg:w-1/3 w-1/2"/>
                <img src={logo} className="lg:w-1/3 w-1/2"/> 
            </div>

            <div className="font-satoshiBold lg:text-4xl md:text-2xl text-xl">Latest News</div>
            <div className="flex lg:flex-row lg:justify-between lg:space-x-10 flex-col justify-center space-y-4">
                <NewsItem   
                Source="Ontario Brain Injury Association’s Quarterly Magazine" 
                Title="Helping Brains Heal: Expanding Care Access for Brain Injury Survivors" 
                Description="Helping Brains Heal's partnership with ConcussionBox.org was featured in OBIA’s latest magazine issue, focusing on accessible rehabilitation resources for individuals with brain injuries." 
                Link="https://concussion.org/"
                />
                <NewsItem   
                Source="Ontario Brain Injury Association’s Quarterly Magazine" 
                Title="Helping Brains Heal: Expanding Care Access for Brain Injury Survivors" 
                Description="Helping Brains Heal's partnership with ConcussionBox.org was featured in OBIA’s latest magazine issue, focusing on accessible rehabilitation resources for individuals with brain injuries." 
                Link="https://concussion.org/"
                />
                <NewsItem   
                Source="Ontario Brain Injury Association’s Quarterly Magazine" 
                Title="Helping Brains Heal: Expanding Care Access for Brain Injury Survivors" 
                Description="Helping Brains Heal's partnership with ConcussionBox.org was featured in OBIA’s latest magazine issue, focusing on accessible rehabilitation resources for individuals with brain injuries." 
                Link="https://concussion.org/"
                />  
            </div>
            <div className="flex justify-center">
                <Link to="/news">
                    <button className="bg-transparent border lg:text-base text-sm border-fontBlack px-4 lg:py-2 py-1 text-fontBlack rounded-full hover:bg-fontBlack hover:text-white transition duration-300">
                        View All
                    </button>
                </Link>
            </div>
            <div className="flex justify-center lg:py-24 py-12"> 
                <div className="flex flex-col items-center"> 
                    <div className="font-satoshiBold lg:text-4xl md:text-2xl text-xl text-center">Support Recovery Efforts</div>
                    <div className="font-erodeRegular lg:text-base md:text-md text-sm mt-6 lg:w-1/2 w-3/4 text-center">
                        Your donation helps fund care packages and rehabilitation resources for individuals with acquired brain injuries.
                    </div>
                    <Link to="/donations">
                        <button className="mt-6 bg-secondaryBlue lg:text-base text-sm font-satoshiMedium px-6 lg:py-2 py-1 text-background rounded-full hover:scale-110 transition duration-300">
                            Donate Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default About;