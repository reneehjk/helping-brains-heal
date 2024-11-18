function Footer() {
    return (
        <div className="bg-background flex flex-col p-5 border-black border-y-[1px] border-x-0">
            <div className="flex xl:flex-row lg:flex-row md:flex-row xl:space-x-48 lg:space-x-40 md:space-x-32 flex-col">
                <div className="xl:w-1/3 lg:w-1/3 md:w-1/3">
                    <div className="font-satoshiBold xl:text-xl lg:text-xl md:text-lg text-lg text-primaryBlue mb-3">Helping Brains Heal</div>
                    <div className="font-erodeRegular xl:text-lg lg:text-lg md:text-sm text-sm mb-1">
                        Bringing accessible treatment and care packages to support rehabilitation for those with acquired brain injuries (ABI)
                    </div>
                </div>
                <div className="flex flex-row xl:space-x-48 lg:space-x-40 md:space-x-32 justify-between">
                    <div className="flex flex-col font-satoshiMedium xl:text-lg lg:text-lg md:text-sm text-sm mt-3">
                        <a href="/about" className="hover:underline">About Us</a>
                        <a href="/opportunities" className="hover:underline">Treatment Opportunities</a>
                        <a href="/donations" className="hover:underline">Donate</a>
                        <a href="/news" className="hover:underline">News</a>
                    </div>
                    <div className="flex flex-col font-satoshiMedium text-fontBlack xl:text-lg lg:text-lg md:text-sm text-sm">
                        <div className="font-satoshiBold xl:text-xl lg:text-xl md:text-lg text-lg text-primaryBlue mb-1">Contact us</div>
                        <div className="flex flex-col xl:text-left lg:text-left md:text-left text-right">
                        <a href="mailto:reneehjkim11@gmail.com" className="hover:underline">Email</a>
                        <a href="https://www.linkedin.com/in/reneehjkim" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                        <a href="https://github.com/reneehjk" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-erodeRegular text-lightGrey text-sm">@2024 Helping Brains Heal</div>
        </div>
    );
}

export default Footer;
