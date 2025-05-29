import Button from "./Button";

const DonationCard = ({ name, details, imageSrc, linkTo, progressBar }) => {
    return (
        <div className="group py-5 px-7 relative bg-background md:w-[530px] rounded-xl shadow-md md:shadow-none hover:shadow-md transition-all duration-300">
            <h3 className="pb-1 md:pb-[16px] w-full text-[2rem] font-satoshiBold">{name || "Donation Title"}</h3>
            <div className="hidden md:block h-[120px] w-[475px] rounded-lg overflow-hidden">
                {(!imageSrc && <div className='bg-blue-300 w-full h-full'></div>) || (imageSrc && (<img src={imageSrc} alt={name} className="w-auto object-cover" />))}
            </div>
            <p className="group-hover:max-h-0 group-hover:opacity-0 group-focus:max-h-0 group-focus:opacity-0 md:hidden mt-3 font-erodeRegular transition-all duration-500 ">Click or hover for details</p>
            <p className="md:max-h-[1000px] md:opacity-100 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[1000px] group-hover:opacity-100 transition-all duration-500 delay-600 md:mt-3 font-erodeRegular">{details || "Description"}</p>
            <div className="text-right mt-3 md:mt-5">
                <div className="inline-block md:block">
                    <Button to={linkTo} variant="primary" size="medium">
                        Donate Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;