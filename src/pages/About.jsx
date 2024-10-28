import logo from "../assets/helpingBrainsHeal.svg";
import NewsItem from "../components/NewsItemsAbout";
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="min-h-screen bg-background flex flex-col justify-start p-24 space-y-16 select-none">
            <div className="flex items-end space-x-12 pb-24">
                <img src={logo} className="grayscale w-20 h-20" alt="Helping Brains Heal Logo" />
                <div className="font-satoshiBold text-5xl ">
                    About Helping Brains Heal
                </div>
            </div>

            <div className="font-satoshiBold text-4xl">Overview</div>

            <div className="flex flex-col mx-48">
                <div className="flex justify-self-start font-satoshiBold text-xl ">Our Mission</div>

                <div className="flex self-center font-erodeRegular text-base text-center leading-relaxed mt-3 pb-24">
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

            <div className="font-satoshiBold text-4xl ">Gallery</div>
            <div className="flex flex-row flex-wrap justify-between pb-24">
                <img src={logo} className="w-1/3"/> 
                <img src={logo} className="w-1/3"/> 
                <img src={logo} className="w-1/3"/> 
                <img src={logo} className="w-1/3"/> 
                <img src={logo} className="w-1/3"/> 
                <img src={logo} className="w-1/3"/> 
            </div>

            <div className="font-satoshiBold text-4xl">Latest News</div>
            <div className="flex flex-row justify-between space-x-10">
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
                    <button className="bg-transparent border border-fontBlack px-4 py-2 text-fontBlack rounded-full hover:bg-fontBlack hover:text-white transition duration-300">
                        View All
                    </button>
                </Link>
            </div>
            <div className="flex justify-center py-24"> 
                <div className="flex flex-col items-center"> 
                    <div className="font-satoshiBold text-4xl text-center">Support Recovery Efforts</div>
                    <div className="font-erodeRegular text-base mt-6 w-1/2 text-center">
                        Your donation helps fund care packages and rehabilitation resources for individuals with acquired brain injuries.
                    </div>
                    <Link to="/donations">
                        <button className="mt-6 bg-secondaryBlue text-base font-satoshiMedium px-6 py-2 text-background rounded-full hover:scale-110 transition duration-300">
                            Donate Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default About;