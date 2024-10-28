function NewsItem({ Source, Title, Description, Link }) {
    return (
        <div className="flex flex-col p-4 border rounded-lg shadow-md w-full hover:bg-newsBlue hover:bg-opacity-10 transition duration-300">
            <div>
                <div className="text-xs text-fontBlack font-satoshiMedium">{Source}</div>
                <div className="text-2xl text-primaryBlue font-satoshiBold mt-10">{Title}</div>
                <div className="text-base text-fontBlack font-erodeRegular mt-3">{Description}</div>
            </div>
            <div className="flex justify-end ">
                <a
                    href={Link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </div>
        </div>
    );
}

export default NewsItem;
