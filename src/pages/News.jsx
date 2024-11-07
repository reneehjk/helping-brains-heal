import NewsItem from "../components/NewsItems";

function News() {
    return (
        <div className="bg-background">
            <div className="min-h-screen  justify-start space-y-6 select-none mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
                <div className="font-satoshiBold lg:text-5xl md:text-3xl text-2xl lg:pb-24 pb-10 md:mt-20 sm:mt-20 xs:mt-28">Latest News</div>
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
                <div className="flex justify-center py-24">
                    <div className="font-satoshiMedium lg:text-2xl md:text-xl text-lg text-center">Stay tuned for more updates, stories and highlights featuring Helping Brains Heal.</div>
                </div>
            </div>
        </div>
    );
}

export default News;
