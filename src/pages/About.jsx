import logo from "../assets/helpingBrainsHeal.svg";
import NewsItem from "../components/NewsItemsAbout";
import sanityClient from '../sanity/sanityClient';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from "@tanstack/react-query";
import { Helmet } from 'react-helmet-async';
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";


const fetchGalleryImages = async () => {
    const data = await sanityClient.fetch(`
        *[_type == "gallery"]{
            _id,
            "imageUrl": image.asset->url,
        }
    `);
    return data.map(item => ({
        original: item.imageUrl, // Full-size image
        thumbnail: item.imageUrl, // Use the same image as thumbnail
    }));
};

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

function About() {
    const { data: galleryImages = [], isLoading: isLoadingGallery } = useQuery({
        queryKey: ['galleryImages'],
        queryFn: fetchGalleryImages,
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });

    const { data: newsItems = [], isLoading } = useQuery({
        queryKey: ['newsItems'],
        queryFn: fetchNews,
        staleTime: 100 * 60 * 5,
    })

    return (
        <div className="bg-background text-fontBlack select-none">
            <Helmet>
                <title>About - Helping Brains Heal</title>
            </Helmet>
            <div className="min-h-screen flex flex-col justify-start lg:space-y-16 space-y-6 mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
                <div className="flex items-end lg:space-x-12 space-x-3 lg:pb-24 md:mt-20 sm:mt-24 xs:mt-28">
                    <img src={logo} className="w-20 h-20 self-center" alt="Helping Brains Heal Logo" />
                    <div className="font-satoshiBold text-5xl">
                        About Helping Brains Heal
                    </div>
                </div>
                <div className="font-satoshiBold xl:text-4xl lg:text-4xl text-3xl">Our Mission </div>
                <div className="flex self-center font-erodeRegular xl:text-lg lg:text-lg text-base text-center mt-3 lg:pb-24 sm:mx-5">
                    Our mission is to enhance the accessibility of treatments for individuals enduring brain injuries. We strive to improve
                        access to brain injury rehabilitation resources by connecting patients with affordable and convenient treatment 
                        opportunities. We hope to make a difference during the earlier stages of recovery. 
                </div>
              

                <div className="font-satoshiBold xl:text-4xl lg:text-4xl text-3xl">Gallery</div>
                <ReactImageGallery items={galleryImages} />

                <div className="font-satoshiBold xl:text-4xl lg:text-4xl text-3xl">Latest News</div>
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
                <div className="flex justify-center">
                    <Link to="/news">
                        <button className="bg-transparent border xl:text-lg lg:text-lg text-base border-fontBlack px-4 lg:py-2 py-1 text-fontBlack rounded-full hover:bg-fontBlack hover:text-white transition duration-300">
                            View All
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center lg:py-24 py-12">
                    <div className="flex flex-col items-center">
                        <div className="font-satoshiBold xl:text-4xl lg:text-4xl text-3xl text-center">Support Recovery Efforts</div>
                        <div className="font-erodeRegular xl:text-lg lg:text-lg text-base mt-6 lg:w-1/2 w-3/4 text-center">
                            Your donation helps fund care packages and rehabilitation resources for individuals with acquired brain injuries.
                        </div>
                        <Link to="/donations">
                            <button className="mt-6 bg-secondaryBlue xl:text-lg lg:text-lg text-base font-satoshiMedium px-6 lg:py-2 py-1 text-background rounded-full hover:scale-110 transition duration-300">
                                Donate Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;
