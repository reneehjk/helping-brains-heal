const TeamCard = ({ role, name, description, backgroundImage, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block transition-all hover:text-primaryBlue duration-100 ease-out hover:shadow-lg">
            <div className="rounded-lg overflow-hidden bg-white shadow-md">
                {/* Image with rounded top corners */}
                <div className="relative h-72 rounded-t-lg overflow-hidden">
                    <img
                        src={backgroundImage}
                        alt={`${name}'s profile`}
                        className="w-full h-full object-cover" // Adjust object-top to center on important parts
                    />
                    <div className="absolute top-2 right-2 bg-black px-3 py-1 rounded-full text-xs font-semibold text-white font-satoshiBold z-10">
                        {role}
                    </div>
                </div>


                {/* Name and description below the image */}
                <div className="p-4 text-left md:h-32">
                    <h4 className="text-lg font-semibold font-satoshiBold">{name}</h4>
                    <p className="text-sm font-erodeRegular">{description}</p>
                </div>
            </div>
        </a>
    );
};

export default TeamCard;
