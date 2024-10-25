import InfoCard from "../assets/informationCard";
const Communities = () => {
    return <div>
        <div className="absolute top-0 left-0 h-[300px] w-full z-[-1] bg-slate-300">

            <h1 className="absolute mt-[200px] mx-[75px] text-[3rem] font-satoshiBold">Communities</h1>

        </div>
        <div className="relative mx-[65px] overflow-hidden ">
            <div className="mt-[394px] mb-[110px] mx-auto flex flex-row flex-wrap gap-x-5 gap-y-16 w-auto">
                <InfoCard
                    clinicName="Community Name"
                    location="Somewhere"
                    details="Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                />
                <InfoCard
                    clinicName="Community Name"
                    location="Somewhere"
                    details="Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                />
                <InfoCard
                    clinicName="Community Name"
                    location="Somewhere"
                    details="Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                />
                <InfoCard
                    clinicName="Community Name"
                    location="Somewhere"
                    details="Some details --- eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
                />
            </div>
        </div>
    </div>
};
export default Communities;
