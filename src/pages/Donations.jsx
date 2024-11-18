import DonationCard from "../components/donationCard";
import sanityClient from '../sanity/sanityClient'
import React, { useEffect, useState } from 'react';

const Donations = () => {
    const [donations, setDonations] = useState([])

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "donation"]{
                    name,
                    description,
                    "image": image.asset->url,
                    link
                }`
            )
            .then((data) => setDonations(data))
            .catch(console.error);

        console.log(donations)
    }, []);

    return <div className="mx-auto realtive w-full max-w-7xl px-5 py-10 md:px-10 md:py-20 select-none">
        <div className="absolute bottom-2 left-[50%] w-56 h-56 bg-[#1689FE] opacity-45 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1 left-8 w-56 h-56 bg-[#37CAEC] opacity-40 rounded-full blur-[120px] -z-10"></div>

        <div className="pt-20 lg:flex">
            <h1 className="lg:inline-block text-[3rem] w-full sm:w-[500px] leading-[66px] font-satoshiBold  ">Together <br></br> We Help Brains Heal</h1>
            <div className=" lg:inline-block lg:flex-1 pt-7 lg:ml-7 mx-auto lg:text-center font-erodeRegular">We strive to improve access to rehabilitation resources by distributing
                care packages, participating in clinical research, and providing free treatments through community outreach.
                Our goal is to make a tangible impact on the recovery process for those affected by acquired brain injuries.
            </div>
        </div>
        <div className=" py-3 px-3 mt-10 md:mt-20 w-full md:overflow-auto">
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-3">
                {donations.map((donation, index) => (
                    <div className="" key={index}>
                        <DonationCard
                            name={donation.name}
                            details={donation.description}
                            imageSrc={donation.image}
                            linkTo={donation.link}
                        />
                    </div>
                ))}
            </div>

        </div>
    </div>
};
export default Donations;
