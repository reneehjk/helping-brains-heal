const SectionHeader = ({ title, description }) => {
    return (
        <div className="relative w-full max-w-7xl mx-auto pt-7 md:pt-14 lg:pt-20 xl:pt-20">
            {/* Orbs */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#1689FE] opacity-45 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute top-10 right-20 w-56 h-56 bg-[#37CAEC] opacity-40 rounded-full blur-[120px] -z-10"></div>

            <h1 className="text-left text-5xl font-satoshiBold">
                {title}
            </h1>
            <div className="mt-8 font-satoshiMedium lg:text-xl text-primaryBlue w-full md:w-[70%]">
                {description}
            </div>
        </div>
    );
};

export default SectionHeader;