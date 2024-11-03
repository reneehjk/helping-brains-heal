import InfoCard from "../components/informationCard";

const info = [
    {
        title: "Community Name",
        subtitle: "Location",
        description: "Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        title: "Community Name",
        subtitle: "Location",
        description: "Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        title: "Community Name",
        subtitle: "Location",
        description: "Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        title: "Community Name",
        subtitle: "Location",
        description: "Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    }
]

const Communities = () => {
    return (
        <div className="bg-background">
            <header className="relative w-full h-32 sm:h-48 md:h-60 bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/40">
                    <div className="absolute inset-0 flex items-end">
                        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 pb-6 font-satoshiBold text-5xl">
                            Communities
                        </div>
                    </div>
                </div>
            </header>

            <div className="w-full max-w-7xl px-5 py-10 md:px-10 md:py-20">
                <div className="mb-[110px] flex flex-wrap flex-col items-center justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
                    {info.map((information, index) => (
                        <InfoCard
                            clinicName={information.title}
                            location={information.subtitle}
                            details={information.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Communities;
