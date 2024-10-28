import ButtonLink from "../assets/ButtonLink";

const InfoCard = ({ clinicName, location, details, imageSrc }) => {
    return (
        <div className="relative w-[417px] h-[387px] rounded-xl overflow-hidden">
            <div className="h-[155px] bg-gray-200 overflow-hidden">
                {imageSrc && (<img src={imageSrc} alt={clinicName} className="w-auto h-[155px] object-cover" />)}
            </div>
            <div className="mt-[23px] mx-[35px] h-full overflow-hidden">
                <h3 className="text-[1.25rem] font-satoshiBold">{clinicName || "Clinic Name"}</h3>
                <p className="mt-[7px] text-[1.125rem] font-satoshiBold">{location || "Location"}</p>
                <p className="mt-[11px] max-h-[73px] font-erodeRegular whitespace-pre-line">{details || "Description"}</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <ButtonLink label="Learn More" width="px-[60px]"/>
            </div>
        </div>
    );
};
export default InfoCard;

