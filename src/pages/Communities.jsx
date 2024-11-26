import sanityClient from '../sanity/sanityClient'
import InfoCard from "../components/informationCard";
import { useQuery } from "@tanstack/react-query";
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const fetchCommunities = async () => {
    const data = await sanityClient.fetch(
        `*[_type == "community"]{
            name,
            location,
            description,
            "image": image.asset->url,
            link
        }`
    )
    return data;
}

const Communities = () => {
    const { data: communityItems = [], isLoading } = useQuery({
        queryKey: ['communityItems'],
        queryFn: fetchCommunities,
        staleTime: 1000 * 60 * 5,
    })

    return (
        <div className="bg-background sm:py-10 md:py-0 select-none">
            <Helmet>
                <title>Communities - Helping Brains Heal</title>
            </Helmet>
            <header className="relative mx-auto w-full h-52 sm:h-48 md:h-60 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://images.pexels.com/photos/1595386/pexels-photo-1595386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-primaryBlue/30 via-fontBlack/50 to-fontBlack/80">
                    <div className="absolute inset-0 flex items-end">
                        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 pb-6 font-satoshiBold text-5xl text-background">
                            Communities
                        </div>
                    </div>
                </div>
            </header>
            <div className="mx-auto max-w-7xl px-5 md:px-10 pt-8 md:pt-10">
                <div className=" font-satoshiMedium lg:text-2xl text-xl text-primaryBlue">Join a community of people who have lived the same experience as you. Connect with others and learn more about your injury.</div>
            </div>
            
            <div className="w-full mx-auto max-w-7xl px-5 py-10 md:px-10">
                <div className="flex flex-wrap flex-col items-center justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
                    {isLoading ? (
                        <>
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="mb-6">
                                    <Skeleton height={250} width="100%" />
                                    <Skeleton height={20} width="60%" className="mt-4" />
                                    <Skeleton height={15} width="80%" className="mt-2" />
                                    <Skeleton height={15} width="50%" className="mt-2" />
                                </div>
                            ))}
                        </>
                    ) : (
                        communityItems.map((community, index) => (
                            <motion.div
                                key={community._id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                <InfoCard
                                    key={index}
                                    name={community.name}
                                    location={community.location}
                                    details={community.description}
                                    imageSrc={community.image}
                                    linkTo={community.link}
                                />
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Communities;
