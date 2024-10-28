const TeamCard = ({ role, name, description, backgroundImage, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            <div
                className="relative flex justify-end items-end p-4 rounded-lg text-white h-60"
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>

                {/* Badge in the top-right corner */}
                <div className="absolute top-2 right-2 bg-black px-3 py-1 rounded-full text-xs font-semibold z-10">
                    {role}
                </div>

                {/* Name and description aligned bottom-left */}
                <div className="relative z-10 text-left w-full">
                    <h4 className="text-lg font-semibold">{name}</h4>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </a>
    );
};

export default TeamCard;
