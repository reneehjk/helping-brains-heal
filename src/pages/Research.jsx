import InfoCard from "../components/informationCard";
import sanityClient from '../sanity/sanityClient';
import { useQuery } from "@tanstack/react-query";
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const fetchClinics = async () => {
    const data = await sanityClient.fetch(
        `*[_type == "clinic"]{
            name,
            location,
            description,
            "image": image.asset->url,
            link
        }`
    )
    return data;
}

const Research = () => {
    const { data: clinicItems = [], isLoading } = useQuery({
        queryKey: ['clinicItems'],
        queryFn: fetchClinics,
        staleTime: 1000 * 60 * 5,
    })

    return (
        <div className="bg-background pt-20 sm:py-10 md:py-0 select-none">
            <Helmet>
                <title>Research Opportunities - Helping Brains Heal</title>
            </Helmet>
            <header className="mx-auto relative w-full h-32 sm:h-48 md:h-60 bg-cover bg-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/40">
                    <div className="absolute inset-0 flex items-end">
                        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 pb-6 font-satoshiBold text-5xl">
                            Research Opportunitites
                        </div>
                    </div>

                </div>
            </header>
            <div className="mx-auto max-w-7xl px-5 md:px-10 pt-5">
                <div className=" font-satoshiBold pt-2 text-xl text-primaryBlue ">Join a remote or in person study in the GTA for opportunities to receive clinical care or support for your brain injury</div>
                <div className="font-satoshiBold text-[2 rem] pt-5">Why you should consider enrolling in a research study</div>
                <div className=" font-erodeRegular pt-2">Talk about the stigma around research and privacy and why it’s important to understand that RESEARCH IS A GOOD THING
                </div>
            </div>


            <div className="w-full mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-10">
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
                        clinicItems.map((clinic, index) => (
                            <motion.div
                                key={clinic._id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                <InfoCard
                                    key={index}
                                    name={clinic.name}
                                    location={clinic.location}
                                    details={clinic.description}
                                    imageSrc={clinic.image}
                                    linkTo={clinic.link}
                                />
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Research;