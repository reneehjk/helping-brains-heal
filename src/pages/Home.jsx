import { useEffect, useState } from 'react';
import sanityClient from '../sanity/sanityClient';
import TeamCard from '../components/TeamCard';
import heartBrainVoxel from '../assets/heart-brain-voxel.gif';
import Button from '../components/Button';

const Home = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [boxesDonatedCount, setBoxesDonatedCount] = useState(0);
    const [displayedCount, setDisplayedCount] = useState(0); // State for animated count display
    const [displayedProgress, setDisplayedProgress] = useState(0); // State for animated progress bar

    useEffect(() => {
        // Fetch team members
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
            .then((data) => setTeamMembers(data))
            .catch(console.error);

        // Fetch boxes donated count
        sanityClient
            .fetch(
                `*[_type == "boxesDonated"][0]{
                    count
                }`
            )
            .then((data) => {
                if (data && data.count) {
                    setBoxesDonatedCount(data.count);
                }
            })
            .catch(console.error);
    }, []);

    // Animate displayed count for the ticker effect
    useEffect(() => {
        let start = 0;
        const duration = 1000; // animation duration in milliseconds
        const startTime = performance.now();

        const easeOutQuad = (t) => t * (2 - t); // Easing function for smooth deceleration

        const updateCount = () => {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1); // Ensure progress does not exceed 1

            const easedProgress = easeOutQuad(progress);
            const currentCount = Math.ceil(easedProgress * boxesDonatedCount);

            setDisplayedCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);

    }, [boxesDonatedCount]);

    // Animate displayed progress for a smoother bar transition
    useEffect(() => {
        let start = displayedProgress;
        const target = (boxesDonatedCount / 100) * 100;
        const duration = 1200; // animation duration in milliseconds
        const startTime = performance.now();

        const easeOutQuad = (t) => t * (2 - t);

        const updateProgress = () => {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = easeOutQuad(progress);
            const currentProgress = start + easedProgress * (target - start);

            setDisplayedProgress(currentProgress);

            if (progress < 1) {
                requestAnimationFrame(updateProgress);
            }
        };

        requestAnimationFrame(updateProgress);

    }, [boxesDonatedCount]);

    return (
        <div className='mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20'>
            <header className="py-10 relative">
                {/* Left and Right Orbs */}
                <div className="absolute bottom-0 -left-10 w-56 h-56 bg-[#1689FE] opacity-35 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#37CAEC] opacity-70 rounded-full blur-[120px] -z-10"></div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Hero Content */}
                    <div>
                        <h1 className="text-4xl font-bold leading-tight pt-20">
                            Helping Brains Heal
                        </h1>
                        <p className="mt-4 text-lg text-gray-900 max-w-md">
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
                    <p className="text-md font-satoshiBold mb-2 opacity-50">{displayedCount}/100</p>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
                        <div
                            className="bg-black h-2 rounded-full"
                            style={{ width: `${displayedProgress}%` }} // Use displayedProgress for a smoother animation
                        ></div>
                    </div>
                    <p className="text-gray-600 font-erodeRegular mb-4">
                        Help us reach our goal of delivering 100 care packages to clinics and organizations supporting ABI recovery.
                    </p>
                    <Button variant="outline" disabled={true} className='mt-5'>Donate (under construction)</Button>
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
