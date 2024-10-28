import NewsItem from "../components/NewsItems";

function News () {
    return (
        <div className="min-h-screen bg-background justify-start p-24 select-none">
            <div className="font-satoshiBold text-5xl pb-24">Latest News</div>
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
            <div className="flex justify-center pt-24">
                <div className="font-satoshiMedium text-2xl">Stay tuned for more updates, stories and highlights featuring Helping Brains Heal.</div>
            </div>
        </div>
    );
};

export default News;
