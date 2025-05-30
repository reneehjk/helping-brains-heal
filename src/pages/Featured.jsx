import NewsItem from "../components/NewsItems";
import sanityClient from '../sanity/sanityClient';
import { useQuery } from "@tanstack/react-query";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const fetchNews = async () => {
    const data = await sanityClient.fetch(
        `*[_type == "newsItem"]{
            _id,
            source,
            title,
            description,
            link
        }`
    )
    return data;
}

function Featured() {
    const { data: newsItems = [], isLoading } = useQuery({
        queryKey: ['newsItems'],
        queryFn: fetchNews,
        staleTime: 1000 * 60 * 5,
    })

    return (
        <div className="bg-background select-none">
            <Helmet>
                <title>Featured - Helping Brains Heal</title>
            </Helmet>
            <div className="min-h-screen  justify-start space-y-6 mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
                <div className="font-satoshiBold lg:text-5xl md:text-3xl text-2xl lg:pb-16 pb-14 pt-20">Featured</div>
                <div className="flex lg:flex-row lg:justify-between lg:space-x-10 flex-col justify-center space-y-4">
                    {isLoading ? (
                        <div className="w-full">
                            <Skeleton height={250} width="100%" />
                            <Skeleton height={20} width="60%" className="mt-4" />
                            <Skeleton height={15} width="80%" className="mt-2" />
                            <Skeleton height={15} width="50%" className="mt-2" />
                        </div>
                    ) : (
                        // Animate each NewsItem with staggered effect
                        newsItems.map((news, index) => (
                            <motion.div
                                key={news._id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                <NewsItem
                                    Source={news.source}
                                    Title={news.title}
                                    Description={news.description}
                                    Link={news.link}
                                />
                            </motion.div>
                        ))
                    )}
                </div>
                <div className="flex justify-center py-24">
                    <div className="font-satoshiMedium lg:text-2xl md:text-xl text-lg text-center">Stay tuned for more updates, stories and highlights featuring Helping Brains Heal.</div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
