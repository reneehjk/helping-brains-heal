import TeamCard from '../components/TeamCard';
import heartBrainVoxel from '../assets/heart-brain-voxel.gif';

const team = [
    {
        role: 'Director',
        name: 'Jane Doe',
        description: 'Please add your content here. Keep it short and simple. And smile :) ',
        backgroundImage: heartBrainVoxel,
    },
    {
        role: 'Developer',
        name: 'John Smith',
        description: 'Please add your content here. Keep it short and simple. And smile :)',
        backgroundImage: heartBrainVoxel,
    },
    {
        role: 'Developer',
        name: 'Emily Davis',
        description: 'Please add your content here. Keep it short and simple. And smile :)',
        backgroundImage: heartBrainVoxel,
    },
    {
        role: 'Developer',
        name: 'Michael Brown',
        description: 'Please add your content here. Keep it short and simple. And smile :)',
        backgroundImage: heartBrainVoxel,
    },
];

const Home = () => {
    return (
        <div className=''>
            <header>
                <h1 className="text-5xl font-satoshiBold">Helping Brains Heal</h1>
                <p className="font-erodeRegular">
                    Bringing accessible treatment and care packages to support rehabilitation for
                    those with acquired brain injuries (ABI).
                </p>
                <button>Learn More</button>
            </header>
            <section>
                <h3 className="text-2xl font-satoshiBold">Our mission is to enhance recovery and accessibility for individuals enduring symptoms of brain injuries.</h3>
                <p className="font-erodeRegular">
                    We strive to improve access to rehabilitation resources by distributing care packages, participating in clinical research, and providing free treatments through community outreach. Our goal is to make a tangible impact on the recovery process for those affected by acquired brain injuries.
                </p>
            </section>
            <section>
                <h2 className="text-3xl font-satoshiBold">Pamphlet</h2>
            </section>

            <section>
                <h2 className="text-3xl font-satoshiBold">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3">
                    {/* Dynamically render TeamCard components */}
                    {team.map((member, index) => (
                        <TeamCard
                            key={index}
                            role={member.role}
                            name={member.name}
                            description={member.description}
                            backgroundImage={member.backgroundImage}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
