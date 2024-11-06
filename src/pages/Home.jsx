import { useEffect, useState } from 'react';
import sanityClient from '../sanity/sanityClient'
import TeamCard from '../components/TeamCard';
import heartBrainVoxel from '../assets/heart-brain-voxel.gif';

const team = [
    {
        role: 'Director',
        name: 'Jane Doe',
        description: 'Please add your content here. Keep it short and simple. And smile :) ',
        backgroundImage: heartBrainVoxel,
        link: 'https://example.com/jane-doe'
    },
    {
        role: 'Developer',
        name: 'John Smith',
        description: 'Please add your content here. Keep it short and simple. And smile :)',
        backgroundImage: heartBrainVoxel,
        link: 'https://example.com/john-smith'
    },
    {
        role: 'Developer',
        name: 'Emily Davis',
        description: 'Please add your content here. Keep it short and simple. And smile :)',
        backgroundImage: heartBrainVoxel,
        link: 'https://example.com/emily-davis'
    },
    {
        role: 'Developer',
        name: 'Michael Brown',
        description: 'Please add your content here. Keep it short and simple. And smile :)',
        backgroundImage: heartBrainVoxel,
        link: 'https://example.com/michael-brown'
    },
];

const Home = () => {
    const [teamMembers, setTeamMembers] = useState([])

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "teamMember"]{
                    role,
                    name,
                    description,
                    "backgroundImage": backgroundImage.asset->url,
                    link
                }`
            )
            .then((data) => {
                setTeamMembers(data);
                console.log(data)
            })
            .catch(console.error);

        console.log(teamMembers)
    }, []);

    return (
        <div className='mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20'>
            <header className="py-10 relative">
                {/* Left and Right Orbs */}
                <div className="absolute bottom-0 -left-10 w-56 h-56 bg-[#1689FE] opacity-35 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#37CAEC] opacity-70 rounded-full blur-[120px] -z-10"></div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Hero Content */}
                    <div>
                        <h1 className="text-4xl font-bold leading-tight">
                            Helping Brains Heal
                        </h1>
                        <p className="mt-4 text-lg text-gray-900 max-w-md">
                            Bringing accessible treatment and care packages to support rehabilitation for those with acquired brain injuries (ABI).
                        </p>
                        <a className="mt-6 font-satoshiBold bg-gray-900 text-white py-2 px-4 rounded-full transition-all duration-200 inline-block">
                            Learn More
                        </a>
                    </div>

                    {/* Hero Image */}
                    <div className="mt-6 md:mt-0">
                        <img src={heartBrainVoxel} className="mx-auto max-w-full h-auto rounded-lg shadow-lg" alt="Heart Brain Voxel" />
                    </div>
                </div>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-max py-10">
                {/* Left Side: Mission Text */}
                <div>
                    <h3 className="text-2xl font-satoshiBold mb-4">
                        Our mission is to enhance recovery and accessibility for individuals enduring symptoms of brain injuries.
                    </h3>
                    <p className="font-erodeRegular text-gray-600">
                        We strive to improve access to rehabilitation resources by distributing care packages, participating in clinical research, and providing free treatments through community outreach. Our goal is to make a tangible impact on the recovery process for those affected by acquired brain injuries.
                    </p>
                </div>

                {/* Right Side: Goal Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs mx-auto py-10">
                    <h4 className="text-lg font-satoshiBold mb-2">Goal: 100 Care Packages</h4>
                    <p className="text-md font-satoshiBold mb-2 opacity-50">95/100</p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                        <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: "95%" }}  // Update the width dynamically based on progress
                        ></div>
                    </div>

                    <p className="text-gray-600 font-erodeRegular mb-4">
                        Help us reach our goal of delivering 100 care packages to clinics and organizations supporting ABI recovery.
                    </p>
                    <a className="mt-6 font-satoshiBold bg-gray-900 text-white py-2 px-4 rounded-full transition-all duration-200 inline-block">
                        Donate
                    </a>
                </div>
            </section>

            <section className="py-10">
                <h2 className="text-3xl font-satoshiBold mb-6">Pamphlet</h2>
                <div className="bg-gray-200 aspect-w-16 aspect-h-9 w-full max-w-3xl flex items-center justify-center rounded-lg shadow-md">
                    <p className="text-gray-500">Placeholder</p>
                </div>
            </section>

            <section className='py-10'>
                <h2 className="text-3xl font-satoshiBold pb-5">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Dynamically render TeamCard components */}
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            role={member.role}
                            name={member.name}
                            description={member.description}
                            backgroundImage={member.backgroundImage}
                            link={member.link}
                        />
                    ))}

                </div>
            </section>
        </div>
    );
};

export default Home;
