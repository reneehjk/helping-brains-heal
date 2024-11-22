import '../styles.css';
import { Helmet } from 'react-helmet-async';
import doctor from "../assets/doctor.png";
import question from "../assets/question.png";
import sanityClient from '../sanity/sanityClient';
import concussionPic from '../assets/how-concussions-impact-brain-health-web.jpg'


const remark = [
    { main: '1. Rest immediately', description: 'Immediately stop the activity you were doing when the injury occurred.' },
    { main: '2. Contact a doctor', description: 'Seek a doctor/medical personnel as soon as possible. If you are too unwell to find a doctor yourself, ask someone to assist you. You will be assessed and provided with a concussion diagnosis if applicable.' },
    { main: '3. Rest for 24-48 hours', description: 'Rest for the first 24-48 hours post-injury.' },
    { main: '4. Gradually increase activity', description: 'After 24-48 hours, patients may be encouraged to slowly increase activity while still resting.' },
    { main: '5. Avoid driving', description: 'Do not drive until a doctor says you are allowed to do so.' },
    { main: '6. Avoid substances', description: 'Avoid drinking and non-prescription drugs.' },
    { main: '7. Monitor symptoms', description: 'Monitor your symptoms. If you can, keep a log of your symptoms as they may change over the few days post-injury.' }
];


const qa = [
    { question: 'Who is allowed to diagnose a concussion?', answer: 'In Canada, doctors and nurse practitioners are the only professionals who can medically assess patients with a brain injury. This includes conducting a physical exam, ordering diagnostic tests, and referring patients to other medical professionals (Brain Injury Canada).' },
    { question: 'What can cause a concussion?', answer: 'Concussions are a classification of traumatic brain injury that occurs when your brain is shaken inside the skull (Brain Injury Canada). Examples of causes of TBIs include falls that involve hitting the head, assault, motor vehicle accidents, and sports injuries, and shaken baby syndrome.' },
    { question: 'What are brain injuries?', answer: 'A brain injury is any damage to the brain post-birth. The two types of acquired brain injuries are non-traumatic brain injuries and traumatic brain injuries. The types of traumatic brain injuries can range from mild traumatic brain injuries, also known as concussions, to severe traumatic brain injuries (Brain Injury Canada).' }
]

const Resources = () => {
    return (
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-10 select-none">
            <Helmet>
                <title>Free Resources - Helping Brains Heal</title>
            </Helmet>
            <h1 className="text-left text-5xl font-satoshiBold xl:pt-20 lg:pt-20 md:pt-14 pt-7">
                Free Resources
            </h1>
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#1689FE] opacity-45 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute top-10 right-20 w-56 h-56 bg-[#37CAEC] opacity-40 rounded-full blur-[120px] -z-10"></div>
            <div className="flex lg:flex-row flex-col justify-between mt-10 mb-10">
                <div>
                    <div className='font-satoshiMedium xl:text-xl lg:text-xl md:text-lg text-md xl:text-left lg:text-left text-center'>
                        <div className='hover:underline'>Resource</div>
                        <div className='hover:underline'>Resource</div>
                        <div className='hover:underline'>Resource</div>
                        <div className='hover:underline'>Resource</div>
                        <div className='hover:underline'>Resource</div>
                    </div>
                </div>
                <img src={concussionPic} className='xl:max-w-[45%] lg:max-w-[45%] md:self-center sm:self-center xs:self-center sm:mt-10 xs:mt-10 lg:mt-0 xl:mt-0' />
            </div>
            <div className='flex lg:flex-row lg:justify-between flex-col'>
                <div className='lg:max-w-[45%]'>
                    <h1 className="text-3xl font-satoshiBold mb-4">Concussion</h1>
                    <h2 className="xl:text-xl lg:text-xl text-lg font-satoshiMedium  text-primaryBlue mb-2">What Should I Do Next?</h2>
                    <h3 className='mb-5 font-satoshiBold xl:text-lg lg:text-lg text-base text-fontBlack'>This is known as the acute phase (follow the steps below)</h3>
                    <div className="space-y-6">
                        {remark.map((item, index) => (
                            <div key={index} className="flex flex-col space-y-2">
                                <span className="font-satoshiBold xl:text-lg lg:text-lg text-base text-fontBlack">{item.main}</span>
                                <span className="font-satoshiMedium text-gray-700 xl:text-lg lg:text-lg text-base">{item.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:max-w-[45%] bg-secondaryBlue bg-opacity-20 xl:p-12 lg:p-12 md:p-7 py-7 px-3 rounded-xl sm:mt-10 xs:mt-10 lg:mt-0 xl:mt-0">
                    <h2 className="text-3xl font-satoshiBold mb-8 text-fontBlack">
                        Frequently Asked Questions
                    </h2>
                    {qa.map((item, index) => (
                        <div key={index} className="flex flex-col mb-5">
                            {/* Question Section */}
                            <div className="flex flex-row items-center mb-5"> 
                                <img src={question} className="h-9 w-9 mr-3" alt="Question icon" />
                                <span className="font-satoshiBold xl:text-lg lg:text-lg text-base text-fontBlack">
                                    {item.question}
                                </span>
                            </div>
                            {/* Answer Section */}
                            <div className="flex flex-row items-start">
                                <span className="font-satoshiMedium text-gray-700 xl:text-lg lg:text-lg text-base mr-3 text-right">
                                    {item.answer}
                                </span>
                                <img src={doctor} className="h-9 w-9" alt="Doctor icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>     
            <div className='text-center mt-8 font-erodeRegular xl:text-lg lg:text-lg text-base text-fontBlack'>Disclaimer</div>          
        </div>
    );
};

export default Resources;
