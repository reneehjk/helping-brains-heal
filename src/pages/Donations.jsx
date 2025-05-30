import { useQuery } from "@tanstack/react-query";
import DonationCard from "../components/donationCard";
import sanityClient from '../sanity/sanityClient';
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SectionHeader from "../components/SectionHeader";

const fetchDonations = async () => {
    const data = await sanityClient.fetch(
        `*[_type == "donation"]{
        name,
        description,
        "image": image.asset->url,
        link
    }`
    );
    return data;
};

const Donations = () => {
    const { data: donationItems = [], isLoading } = useQuery({
        queryKey: ['donationitems'],
        queryFn: fetchDonations,
    });

    return (
        <div className="relative w-full mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-20 select-none">
            <Helmet>
                <title>Donation - Helping Brains Heal</title>
            </Helmet>

            <SectionHeader
                title="Together We Help Brains Heal"
                description="We strive to improve access to rehabilitation resources by distributing care packages, participating in clinical research, and providing free treatments through community outreach. Our goal is to make a tangible impact on the recovery process for those affected by acquired brain injuries."
                withOrbs
            />

            <div className="py-3 px-3 mt-5 md:mt-10 w-full md:overflow-auto">
                <div className="flex flex-col md:flex-row gap-x-6 gap-y-3">
                    {isLoading ? (
                        <div className="w-full">
                            <Skeleton height={250} width="100%" />
                            <Skeleton height={20} width="60%" className="mt-4" />
                            <Skeleton height={15} width="80%" className="mt-2" />
                            <Skeleton height={15} width="50%" className="mt-2" />
                        </div>
                    ) : (
                        donationItems.map((donation, index) => (
                            <motion.div
                                key={donation._id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                <DonationCard
                                    name={donation.name}
                                    details={donation.description}
                                    imageSrc={donation.image}
                                    linkTo={donation.link}
                                />
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Donations;
