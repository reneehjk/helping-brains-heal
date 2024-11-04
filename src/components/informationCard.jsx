import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ButtonLink from "./ButtonLink";

const InfoCard = ({ clinicName, location, details, imageSrc, linkTo }) => {
    return (
        <div className="relative rounded-xl overflow-hidden min-w-[240px] max-w-[240px] h-[345px] sm:max-w-[345px] sm:h-[320px] lg:w-full lg:h-[387px]">
            <div className="h-[98px] sm:h-[108px] lg:h-[155px]  bg-gray-200 overflow-hidden">
                {imageSrc && (<img src={imageSrc} alt={clinicName} className="w-auto h-[98px] sm:h-[108px] lg:h-[155px] object-cover" />)}
            </div>
            <div className="relative mt-[10px] h-auto lg:[24px] lg:mt-[23px] mx-4 overflow-hidden ">
                <h3 className="hidden sm:block text-center sm:text-left text-[1.25rem] font-satoshiBold">{clinicName || "Clinic Name"}</h3>
                <a
                    href={linkTo}
                    className= "block sm:hidden text-[1.25rem] font-satoshiBold text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {clinicName || "Clinic Name"} <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>  
                </a>
                
                <p className="mt-[2px] text-center sm:text-left lg:mt-[7px] text-[1.125rem] font-satoshiBold">{location || "Location"}</p>
                <p className="mt-[3px] lg:mt-[11px] max-h-[150px] font-erodeRegular whitespace-pre-line">{details || "Description"}</p>
                <div className=" hidden sm:block absolute top-1 right-0 ">
                    <ButtonLink label={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} href={linkTo} width="py-1 sm:py-2 px-4" />
                </div>
            </div>

        </div>

    );
};
export default InfoCard;

