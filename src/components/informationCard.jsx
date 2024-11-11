import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ButtonLink from "./ButtonLink";

const InfoCard = ({ name, location, details, imageSrc, linkTo }) => {
    return (
        <div className="group relative rounded-xl overflow-hidden min-w-[240px] max-w-[240px] h-[345px] sm:max-w-[345px] sm:h-[360px] lg:w-full lg:h-[387px] hover:shadow-md duration-300">
            <div className="h-[98px] sm:h-[125px] lg:h-[155px] overflow-hidden">
                {(!imageSrc && <div className='bg-blue-300 w-full h-full'></div>)||(imageSrc && (<img src={imageSrc} alt={name} className="w-auto object-cover" />))}
            </div>
            <div className="relative mt-[10px] h-auto md:mt-[13px] lg:mt-[15px] mx-4 ">
                <h3 className="hidden sm:block text-center sm:text-left text-[1.25rem] font-satoshiBold">{name || "Name"}</h3>
                <a
                    href={linkTo}
                    className= "group-hover:shadow-text-shadow group-hover:scale-105 hover:text-newsBlue transition duration-30 block sm:hidden text-[1.25rem] font-satoshiBold text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {name || "Name"} 
                    <span className='ml-3 text-[1.15rem]'><FontAwesomeIcon icon={faArrowUpRightFromSquare}/>  </span>
                </a>
                
                <p className="mt-[1px] lg:mt-[7px] text-center text-primaryBlue sm:text-left text-[1.125rem] font-satoshiMedium">{location || "Location"}</p>
                <p className="mt-[3px] lg:mt-[7px] max-h-[150px] font-erodeRegular ">{details || "Description"}</p>
                <div className=" hidden sm:block absolute top-1 right-0 ">
                    <ButtonLink label={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} href={linkTo} width="py-1 sm:py-2 px-4" />
                </div>
            </div>

        </div>

    );
};
export default InfoCard;

