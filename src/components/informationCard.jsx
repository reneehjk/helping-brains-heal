// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
// import ButtonLink from "./ButtonLink";

const InfoCard = ({ name = "Name", location = "-", details = "Description", imageSrc, linkTo }) => {
    return (
        <div className="group relative rounded-xl overflow-hidden min-w-[240px] w-full pb-5 sm:max-w-[345px] sm:h-[360px] lg:w-full lg:h-[387px] shadow-md transition-shadow duration-300">
            {/* Image Section */}
            <div className="h-[98px] sm:h-[125px] lg:h-[155px] overflow-hidden bg-[#638BB3]">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={`Image of ${name}`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-[#638BB3]"></div>
                )}
            </div>

            {/* Content Section */}
            <div className="relative mt-3 mx-4">
                {/* Name */}
                <a
                    href={linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:block text-center sm:text-left text-xl font-satoshiBold text-primaryBlue underline"
                >
                    {name}
                </a>
                {/* Location */}
                <p className="mt-1 lg:mt-2 text-center text-primaryBlue sm:text-left text-lg font-satoshiMedium">
                    {location}
                </p>

                {/* Details */}
                <p className="mt-2 lg:mt-3 max-h-[150px] font-erodeRegular text-gray-700">
                    {details}
                </p>

                {/* Button Link */}
                {/* <div className="hidden sm:block absolute top-1 right-0">
                    <ButtonLink
                        label={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                        href={linkTo}
                        width="py-1 sm:py-2 px-4"
                    />
                </div> */}
            </div>
        </div>
    );
};

export default InfoCard;