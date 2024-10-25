import { Link } from 'react-router-dom';

const Opportunities = () => {
    return <div className="mt-[200px] mx-[75px] ">
        <h1 className="text-[3rem] font-satoshiBold ">Treatment Opportunities</h1>

        <div className="mt-[125px] mx-auto justify-center flex flex-row gap-x-20 flex-wrap ">
            <div className='max-w-[400px] max-h-[300px]'>
                <Link to="/clinic" className="text-color-2  text-[2.15rem] font-satoshiBold hover:underline text-center">Free Resources &gt;</Link>
                <body className='mt-[25px] font-erodeRegular overflow-auto'>
                    Clinical treatment opportunities
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
                </body>
            </div>
            <div className='max-w-[400px] max-h-[300px]'>
                <Link to="/communities" className="text-color-2 text-[2.15rem] font-satoshiBold hover:underline text-center">Communities &gt;</Link>
                <body className='mt-[25px] font-erodeRegular overflow-auto'>
                    Clinical treatment opportunities
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
                </body>
            </div>
        </div>
        <div className='pb-[110px]'>
            <div className='flex flex-row gap-10 flex-wrap'>
                <div className=''>
                    <h1 className='text-[3rem] font-satoshiBold '>Concussion and Stroke</h1>
                    <h2 className='text-color-2  text-[2.15rem] font-satoshiBold mt-[4px]'>What Should I Do Next?</h2>
                    <div className='mt-[40px] grid grid-rows-1 gap-[10px] max-w-[640px]'>
                        <text>
                            Rest immediately
                            Stop physical and mental activities. No sports, intense exercise, or heavy thinking.
                        </text>

                        <text>
                            Avoid screens
                            Limit time on phones, computers, and TVs, as they can worsen symptoms like headaches and dizziness.
                        </text>

                        <text>
                            Stay in a quiet environment
                            Loud noises and bright lights can make your symptoms worse.
                        </text>

                        <text>
                            Monitor symptoms
                            Watch for worsening signs like severe headache, vomiting, confusion, or slurred speech. If these occur, seek medical attention.
                        </text>

                        <text>
                            Stay hydrated and eat light meals
                            Avoid alcohol or caffeine.
                        </text>

                        <text>
                            Sleep well
                            Get plenty of rest, but consult a doctor before sleeping if the concussion just happened, as you may need to be monitored.
                        </text>

                        <text>
                            Follow up with a doctor
                            Visit a healthcare provider for evaluation and guidance on recovery time.
                        </text>

                    </div>
                </div>
                <div className='flex-1 pl-5 bg-clip-padding border-dashed border-4 border-color-2 bg-color-2 bg-opacity-35 rounded-xl'>

                    <text>I'll see what to do with this :/</text>
                </div>
            </div>
        </div>

    </div>
}
export default Opportunities;
