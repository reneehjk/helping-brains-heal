import { useEffect, useState, useRef } from 'react';
import sanityClient from '../sanity/sanityClient';
import { useQuery } from '@tanstack/react-query';
import TeamCard from '../components/TeamCard';
import heartBrainVoxel from '../assets/heart-brain-voxel.gif';
import Button from '../components/Button';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import Ticker from '../components/Ticker';
import ProgressBar from '../components/ProgressBar';

const teamCardVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
        opacity: 1,
        transition: {
            delay: index * 0.1,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};

const fetchTeamMembers = async () => {
    const data = await sanityClient.fetch(
        `*[_type == "teamMember"]{
            role,
            name,
            description,
            "backgroundImage": backgroundImage.asset->url,
            link
        }`
    );
    return data;
};

const fetchBoxesDonated = async () => {
    const data = await sanityClient.fetch(
        `*[_type == "boxesDonated"][0]{count}`
    );
    return data.count || 0;
};

const Home = () => {
    const { data: teamMembers = [] } = useQuery({
        queryKey: ['teamMembers'],
        queryFn: fetchTeamMembers,
        staleTime: 1000 * 60 * 5, // cache data for 5 minutes
    });

    const { data: boxesDonatedCount = 0 } = useQuery({
        queryKey: ['boxesDonated'],
        queryFn: fetchBoxesDonated,
    });

    const scrollY = useMotionValue(0);
    const orbLeftY = useTransform(scrollY, [0, 1000], [0, 200], { damping: 15, stiffness: 120 });
    const orbRightY = useTransform(scrollY, [0, 1000], [0, -200], { damping: 15, stiffness: 120 });

    // Create a ref for the team section
    const teamSectionRef = useRef(null);
    const isInView = useInView(teamSectionRef, { threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        const handleScroll = () => {
            scrollY.set(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    return (
        <div className='mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20 select-none'>
            <header className="py-10 relative">
                {/* Left and Right Orbs */}
                <motion.div
                    style={{ y: orbLeftY }}
                    className="absolute bottom-0 -left-10 w-40 h-40 bg-[#1689FE] opacity-35 rounded-full blur-[120px] -z-10"
                    id="orbLeft"
                ></motion.div>
                <motion.div
                    style={{ y: orbRightY }}
                    className="absolute bottom-0 right-0 w-56 h-56 bg-[#37CAEC] opacity-70 rounded-full blur-[120px] -z-10"
                    id="orbRight"
                ></motion.div>

                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Hero Content */}
                    <div>
                        <h1 className="text-4xl font-bold leading-tight pt-20 md:pt-0">
                            Helping Brains Heal
                        </h1>
                        <p className="mt-4 text-lg text-gray-900 ">
                            Bringing accessible treatment and care packages to support rehabilitation for those with acquired brain injuries (ABI).
                        </p>
                        <Button to="/about" className='mt-5'>About us</Button>
                    </div>

                    {/* Hero Image */}
                    <div className="mt-6 md:mt-0">
                        <img src={heartBrainVoxel} className="mx-auto max-w-full h-auto rounded-lg shadow-lg" alt="Heart Brain Voxel" />
                    </div>
                </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-max py-20">
                {/* Left Side: Mission Text */}
                <div>
                    <h3 className="text-2xl font-satoshiBold mb-4">
                        Our mission is to enhance recovery and accessibility for individuals enduring symptoms of brain injuries.
                    </h3>
                    <p className="font-erodeRegular text-gray-900">
                        We strive to improve access to rehabilitation resources by distributing care packages, participating in clinical research, and providing free treatments through community outreach. Our goal is to make a tangible impact on the recovery process for those affected by acquired brain injuries.
                    </p>
                </div>

                {/* Right Side: Goal Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs mx-auto py-10">
                    <h4 className="text-xl font-satoshiBold mb-2"><Ticker targetCount={boxesDonatedCount} />/100 Care Packages</h4>
                    <ProgressBar progress={(boxesDonatedCount / 100) * 100} />
                    <p className="text-gray-600 font-erodeRegular mb-4">
                        Help us reach our goal of delivering 100 care packages to clinics and organizations supporting ABI recovery.
                    </p>
                    <Button variant="outline" disabled={true} className='mt-5'>Donate (under construction)</Button>
                </div>
            </section>

            <section className="py-20">
                <h2 className="text-3xl font-satoshiBold mb-6">Pamphlet</h2>
                <div className="bg-gray-200 aspect-w-16 aspect-h-9 w-full max-w-3xl flex items-center justify-center rounded-lg shadow-md">
                    <p className="text-gray-500">Placeholder</p>
                </div>
            </section>

            <section ref={teamSectionRef} className='py-20'>
                <h2 className="text-3xl font-satoshiBold pb-5">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Dynamically render TeamCard components */}
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={teamCardVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            custom={index}
                        >
                            <TeamCard
                                role={member.role}
                                name={member.name}
                                description={member.description}
                                backgroundImage={member.backgroundImage}
                                link={member.link}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
