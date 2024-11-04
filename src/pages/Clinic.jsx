import InfoCard from "../assets/informationCard";

const Clinic = () => {
    return (
        <div className="bg-background">
            <header className="relative w-full h-32 sm:h-48 md:h-60 bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/40">
                    <div className="absolute inset-0 flex items-end">
                        <div className="mx-auto w-full max-w-7xl px-5 md:px-10 pb-6 font-satoshiBold text-5xl ">
                            Clinic Opportunitites
                        </div>
                    </div>

                </div>
            </header>

            <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
                <div className="mb-[110px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16">
                    <InfoCard
                        clinicName="Healthy Clinic"
                        location="Somewhere"
                        details="Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                    />
                    <InfoCard
                        clinicName="Healthy Clinic"
                        location="Somewhere"
                        details="Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                    />
                    <InfoCard
                        clinicName="Healthy Clinic"
                        location="Somewhere"
                        details="Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                    />
                    <InfoCard
                        clinicName="Healthy Clinic"
                        location="Somewhere"
                        details="Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                    />
                </div>
            </div>
        </div>
    );
};

export default Clinic;
