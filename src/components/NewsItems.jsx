function NewsItem({ Source, Title, Description, Link }) {
    return (
    <div className="flex flex-col p-4 border rounded-lg shadow-md lg:w-1/3 hover:bg-newsBlue hover:bg-opacity-10 hover:scale-105 transition duration-300">
            <div> 
                <div className="text-xs text-fontBlack font-satoshiMedium">{Source}</div>
                <div className="lg:text-2xl md:text-xl text-lg text-primaryBlue font-satoshiBold mt-10">{Title}</div>
                <div className="lg:text-base md:text-md text-sm text-fontBlack font-erodeRegular mt-3">{Description}</div>
            </div>
            <div className="flex justify-end">
                <a 
                href={Link} 
                target="_blank" 
                rel="noopener noreferrer" 
                >
                    <button className="bg-transparent border border-fontBlack mt-3 px-2 lg:py-2 py-1 text-fontBlack lg:text-base text-sm rounded-full hover:border-fontBlack hover:scale-105 transition duration-300">
                        View Article     
                    </button>
                </a>
            </div>
        </div>
    );
}

export default NewsItem;
