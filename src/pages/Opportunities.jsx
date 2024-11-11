import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const remark = [
    {
        main: 'Rest immediately',
        description: 'Stop physical and mental activities. No sports, intense exercise, or heavy thinking.'
    },
    {
        main: 'Avoid screens',
        description: 'Limit time on phones, computers, and TVs, as they can worsen symptoms like headaches and dizziness.'
    },
    {
        main: 'Stay in a quiet environment',
        description: 'Loud noises and bright lights can make your symptoms worse.'
    },
    {
        main: 'Monitor symptoms',
        description: 'Watch for worsening signs like severe headache, vomiting, confusion, or slurred speech. If these occur, seek medical attention.'
    },
    {
        main: 'Stay hydrated and eat light meals',
        description: 'Avoid alcohol or caffeine.'
    },
    {
        main: 'Sleep well',
        description: 'Get plenty of rest, but consult a doctor before sleeping if the concussion just happened, as you may need to be monitored.'
    },
    {
        main: 'Follow up with a doctor',
        description: 'Visit a healthcare provider for evaluation and guidance on recovery time.'
    }
]

const Opportunities = () => {
    return <div className="mx-auto realtive w-full max-w-7xl px-5 py-10 md:px-10 md:py-20 ">
        <h1 className="text-center md:text-left text-[3rem] font-satoshiBold pt-20">Treatment Opportunities</h1>
        <div className="absolute top-0 right-0 w-56 h-56 bg-[#1689FE] opacity-45 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute top-10 right-20 w-56 h-56 bg-[#37CAEC] opacity-40 rounded-full blur-[120px] -z-10"></div>


        <div className="my-[75px] md:my-[125px] justify-center flex gap-x-5 lg:gap-x-40 gap-y-5 flex-wrap md:flex-nowrap">
            <div className='grow max-w-[450px] min-w-[100px] h-[250px] hover:scale-105 transition duration-500'>
                <Link to="/clinic" className="group text-primaryBlue  text-[2.15rem] font-satoshiBold hover:text-newsBlue hover:scale-105 transition duration-300 ">
                    <span className='text-[1.8rem]'><FontAwesomeIcon icon={faStethoscope} /></span> Clinic <span className='group-hover:animate-pulse'>&gt;</span>
                </Link>
                <div className='mt-[25px] font-erodeRegular overflow-auto'>
                    Clinical treatment opportunities
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
                </div>
            </div>
            <div className='grow max-w-[450px] min-w-[100px] h-[250px] hover:scale-105 transition duration-500'>
                <Link to="/communities" className="group text-primaryBlue text-[2.15rem] font-satoshiBold  hover:text-newsBlue hover:scale-150 transition duration-300 ">
                <span className='text-[1.8rem]'><FontAwesomeIcon icon={faUserGroup} /></span> Communities <span className='group-hover:animate-pulse'>&gt;</span>
                </Link>
                <div className='mt-[25px] font-erodeRegular overflow-auto'>
                    Clinical treatment opportunities
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
                </div>
            </div>
        </div>

        <div className='flex flex-row gap-x-[60px] flex-wrap overflow-hidden sm:h-[640px] gap-y-[100px]'>
            <div>
                <h1 className='text-center md:text-left text-[3rem] font-satoshiBold '>Concussion and Stroke</h1>
                <h2 className='text-center md:text-left text-primaryBlue  text-[2.125rem] font-satoshiBold mt-[3px]'>What Should I Do Next?</h2>
                <div className='mt-[35px] grid grid-rows-1 gap-[13px] max-w-[590px]'>
                    {remark.map((set, index) => (
                        <div>
                            <div className='font-satoshiBold text-[2 rem] block'>
                                {set.main}
                            </div>
                            <div className='font-erodeRegular'>
                                {set.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden md:block shrink flex-1 py-5 px-3 bg-clip-padding border-dashed border-4 border-color-2 bg-color-2 bg-opacity-35 rounded-xl'>
            <div class="w-16 h-16 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
        </div>
    </div>
}
export default Opportunities;
