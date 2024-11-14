import { useState, useEffect } from "react";
import sanityClient from '../sanity/sanityClient'
import InfoCard from "../components/informationCard";

const Communities = () => {
    const [communities, setCommunities] = useState([])

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "community"]{
                    name,
                    location,
                    description,
                    "image": image.asset->url,
                    link
                }`
            )
            .then((data) => {
                setCommunities(data);
                console.log(data); // Log fetched data here
            })
            .catch(console.error);
    }, []);

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

            <div className="w-full mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-20">
                <div className="flex flex-wrap flex-col items-center justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">
                {communities.map((community, index) => (
                        <InfoCard
                            key = {index}
                            name={community.name}
                            location={community.location}
                            details={community.description}
                            imageSrc={community.image}
                            linkTo={community.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Communities;
