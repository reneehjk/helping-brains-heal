import NewsItem from "../components/NewsItems";

function News() {
    return (
        <div className="min-h-screen bg-background justify-start select-none">
            <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
                <div className="font-satoshiBold text-5xl py-20">Latest News</div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
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
                    <div className="font-satoshiMedium text-2xl">
                        Stay tuned for more updates, stories, and highlights featuring Helping Brains Heal.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
