function NewsItemAbout({ Source, Title, Description, Link }) {
    return (
        <div className="flex flex-col p-4 border rounded-lg shadow-md lg:w-1/3 w-full hover:bg-newsBlue hover:bg-opacity-10 hover:scale-105 transition duration-300 pt-5 pb-10">
            <a 
                href={Link} 
                target="_blank" 
                rel="noopener noreferrer" 
                >
            <div> 
                <div className="text-xs text-fontBlack font-satoshiMedium">{Source}</div>
                <div className="lg:text-2xl md:text-xl text-lg text-primaryBlue font-satoshiBold mt-10">{Title}</div>
                <div className="lg:text-base md:text-md text-sm text-fontBlack font-erodeRegular mt-3">{Description}</div>
            </div>

            </a>
        </div>
    );
};

export default NewsItemAbout;
