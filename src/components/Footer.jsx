function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-background border-black border-y-[1px] border-x-0 select-none">
            <div className="flex flex-col p-5 max-w-screen-2xl mx-auto">
                <div className="flex xl:flex-row lg:flex-row md:flex-row xl:space-x-48 lg:space-x-40 md:space-x-32 flex-col">
                    <div className="xl:w-1/3 lg:w-1/3 md:w-1/3">
                        <div className="font-satoshiBold xl:text-xl lg:text-xl md:text-lg text-lg text-primaryBlue mb-3">Helping Brains Heal</div>
                        <div className="font-erodeRegular xl:text-lg lg:text-lg md:text-sm text-sm mb-1">
                            Acting as a link between patients enduring symptoms of brain injury and treatment based in clinical research and community support.
                        </div>
                    </div>
                    <div className="flex flex-row xl:space-x-48 lg:space-x-40 md:space-x-32 justify-between">
                        <div className="flex flex-col font-satoshiMedium xl:text-lg lg:text-lg md:text-sm text-sm mt-8">
                            <a href="/about" className="hover:underline">About Us</a>
                            <a href="/resources" className="hover:underline">Resources</a>
                            <a href="/donations" className="hover:underline">Donate</a>
                            <a href="/news" className="hover:underline">News</a>
                        </div>
                        <div className="flex flex-col font-satoshiMedium text-fontBlack xl:text-lg lg:text-lg md:text-sm text-sm">
                            <div className="font-satoshiBold xl:text-xl lg:text-xl md:text-lg text-lg text-primaryBlue mb-1">Contact us</div>
                            <div className="flex flex-col xl:text-left lg:text-left md:text-left text-right">
                                <a href="mailto:helpbrainsheal@gmail.com" className="hover:underline">Email</a>
                                <a href="https://www.linkedin.com/company/helpingbrainsheal/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                                <a href="https://www.instagram.com/helpingbrainsheal/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                                <a href="https://www.facebook.com/profile.php?id=61568764684737" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-erodeRegular text-lightGrey text-sm">&copy; {currentYear} Helping Brains Heal</div>
            </div>
        </div>
    );
}

export default Footer;
