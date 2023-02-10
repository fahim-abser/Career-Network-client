import React from 'react';
import meta from "../../../assets/opinion/meta.png"
import metabg from "../../../assets/opinion/metabg.png"
import img1 from "../../../assets/opinion/img1.png"
import img2 from "../../../assets/opinion/img2.png"
import img3 from "../../../assets/opinion/img3.png"
const Opinion = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-bold text-center mb-1 font-secondaryFont'>My Openion</h1>
            <p className='text-xl text-center font-besicFont'> With Career NetWork. Save time and reduce</p>
            <div className='flex lg:flex-row flex-col items-center justify-evenly gap-6 mt-32 m-10'>
                {/* img */}
                <div className='relative lg:mb-2 mb-12 '>
                    <img className="relative top-0 left-0 w-10/12 " src={metabg} alt="Workplace" />

                    <img className=" absolute top-[-20px] left-[60px] lg:top-[-20px] lg:left-[80px] w-10/12 hover:shadow-outline" src={meta} alt="" />

                </div>

                {/* part2 */}
                <div className='flex lg:flex-row flex-col justify-center lg:items-center gap-6 md:items-center'>
                    <div className='flex lg:flex-col md:flex-row flex-col justify-center lg:gap-y-6 gap-6'>
                        {/* img1 */}
                        <div className='lg:w-56 h-full md:w-full w-8/12 mx-auto lg:border-l-4 lg:border-b-0 border-b-4 border-sky-500'>
                            <img className='w-full' src={img1} alt="" />
                            <div className='p-2'>
                                <p className='text-2xl font-bold mt-2 font-primaryFont'>Cat</p>
                                <p className='text-sm font-besicFont'>Career Network. Save time and reduCareer Network. Save time an reduceCareer Network. Save time and reduceCareer Network. Save time and reduce</p>
                            </div>
                        </div>
                        <div className='lg:w-56 h-full md:w-full w-8/12 mx-auto lg:border-r-4 lg:border-b-0 border-b-4 border-sky-500'>
                            {/* img2 */}
                            <div className=''>
                                <img  className='w-full' src={img2} alt="" />
                                <div className='p-2'>
                                    <p className='text-2xl font-bold mt-2 font-primaryFont'>Dolphin</p>
                                    <p className='text-sm font-besicFont'>Career Network. Save time and reduCareer Network. Save time an reduceCareer Network. Save time and reduceCareer Network. Save time and reduce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-56 md:w-6/12 h-full w-8/12 mx-auto border-b-4 border-sky-500'>
                        {/* 3rd */}
                        <div>
                            <img className='w-full' src={img3} alt="" />
                            <div className='p-2'>
                                <p className='text-2xl font-bold mt-2 font-primaryFont '>Rabbit</p>
                                <p className='text-sm font-besicFont'>Career Network. Save time and reduCareer Network. Save time an reduceCareer Network. Save time and reduceCareer Network. Save time and reduce</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opinion;