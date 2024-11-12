import NewsItem from "../components/NewsItems";
import sanityClient from '../sanity/sanityClient';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function News() {
    const [loading, setLoading] = useState(true);
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        //fetch news items from sanity
        sanityClient
            .fetch(
                `*[_type == "newsItem"]{
                    _id,
                    source,
                    title,
                    description,
                    link
                }`
            )
            .then((data) => {
                setNewsItems(data);
                setLoading(false);
            })
            .catch(console.error)
    }, [])

    return (
        <div className="bg-background">
            <div className="min-h-screen  justify-start space-y-6 select-none mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
                <div className="font-satoshiBold lg:text-5xl md:text-3xl text-2xl lg:pb-16 pb-14 pt-20">Latest News</div>
                <div className="flex lg:flex-row lg:justify-between lg:space-x-10 flex-col justify-center space-y-4">
                    {loading ? (
                        <div className="flex-1">
                            <Skeleton height={250} width="100%" />
                            <Skeleton height={20} width="60%" className="mt-4" />
                            <Skeleton height={15} width="80%" className="mt-2" />
                            <Skeleton height={15} width="50%" className="mt-2" />
                        </div>
                    ) : (
                        // Render NewsItems once loaded
                        newsItems.map((news) => (
                            <NewsItem
                                key={news._id}
                                Source={news.source}
                                Title={news.title}
                                Description={news.description}
                                Link={news.link}
                            />
                        ))
                    )}
                </div>
                <div className="flex justify-center pt-24">
                    <div className="font-satoshiMedium lg:text-2xl md:text-xl text-lg text-center">Stay tuned for more updates, stories and highlights featuring Helping Brains Heal.</div>
                </div>
            </div>
        </div>
    );
}

export default News;
