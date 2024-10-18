function NewsItemAbout({ Source, Title, Description, Link }) {
    return (
        <div className="flex flex-col p-4 border rounded-lg shadow-md w-1/3 hover:bg-newsBlue hover:bg-opacity-10 hover:scale-105 transition duration-300">
            <a 
                href={Link} 
                target="_blank" 
                rel="noopener noreferrer" 
                >
            <div> 
                <div className="text-xs text-fontBlack font-satoshiMedium">{Source}</div>
                <div className="text-2xl text-primaryBlue font-satoshiBold mt-10">{Title}</div>
                <div className="text-base text-fontBlack font-erodeRegular mt-3">{Description}</div>
            </div>

            </a>
        </div>
    );
};

export default NewsItemAbout;
