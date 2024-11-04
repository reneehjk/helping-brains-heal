import NewsItem from "../components/NewsItems";

function News() {
    return (
        <div className="min-h-screen bg-background justify-start lg:p-24 py-16 px-10 space-y-6 select-none">
            <div className="font-satoshiBold lg:text-5xl md:text-3xl text-2xl lg:pb-24 pb-14">Latest News</div>
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
            <div className="flex justify-center pt-24">
                <div className="font-satoshiMedium lg:text-2xl md:text-xl text-lg text-center">Stay tuned for more updates, stories and highlights featuring Helping Brains Heal.</div>
            </div>
        </div>
    );
}

export default News;
