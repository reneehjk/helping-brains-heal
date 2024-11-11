import ButtonLink from "./ButtonLink";

const DonationCard = ({ name, details, imageSrc, linkTo, progressBar }) => {
    return (

        <div className="group py-5 px-7 relative bg-[#F7F9FC] md:w-[530px] rounded-xl hover:shadow-md transition-all duration-300">
            <h3 className="pb-1 md:pb-[16px] w-full text-[2rem] font-satoshiBold">{name || "Donation Title"}</h3>
            <div className="hidden md:block h-[120px] w-[475px] rounded-lg overflow-hidden">
                {(!imageSrc && <div className='bg-blue-300 w-full h-full'></div>) || (imageSrc && (<img src={imageSrc} alt={name} className="w-auto object-cover" />))}
            </div>
            <div className=" md:mt-5 w-full md:w-[475px] h-[23px] rounded-md bg-slate-300"></div> {/* progress bar*/}
            <p className="md:max-h-[1000px] md:opacity-100 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[1000px] group-hover:opacity-100 transition-all duration-300 delay-400 mt-3 font-erodeRegular">{details || "Description"}</p>
            <div className="text-right mt-3 md:mt-5">
                <div className="inline-block md:block">
                    <ButtonLink label="Donate Now" color="bg-[#3C3C43] text-[#F7F9FC]" href={linkTo} width="py-1 sm:py-2 px-6 md:px-16" />
                </div>
            </div>
        </div>

    );
};
export default DonationCard;