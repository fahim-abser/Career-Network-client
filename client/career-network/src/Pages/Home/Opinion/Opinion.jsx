import React from 'react';
import meta from "../../../assets/opinion/meta.png"
import metabg from "../../../assets/opinion/metabg.png"
import img1 from "../../../assets/opinion/img1.png"
import img2 from "../../../assets/opinion/img2.png"
import img3 from "../../../assets/opinion/img3.png"
const Opinion = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-bold text-center mb-1'>my openion</h1>
            <p className='text-2xl text-center'> With Career NetWork. Save time and reduce</p>
            <div className='lg:flex justify-evenly mt-32 m-10'>
                {/* img */}
                <div className='relative lg:mb-2 mb-12 '>
                    <img className="relative top-0 left-0 w-10/12 " src={metabg} alt="Workplace" />

                    <img className=" absolute top-[-20px] left-[60px] lg:top-[-20px] lg:left-[80px] w-10/12 hover:shadow-outline" src={meta} alt="" />

                </div>

                {/* part2 */}
                <div className='lg:flex gap-6 '>
                    <div>
                        {/* img1 */}
                        <div>
                            <div className='h-[280px] w-[236px]'>
                                <img src={img1} alt="" />
                                <p className='text-2xl font-bold mt-2'>Cat</p>
                                <p className='text-sm'>Freshteam. Save time and reduFreshteam. Save time an reduceFreshteam. Save time and reduceFreshteam. Save time and reduce</p>
                            </div>
                        </div>
                        <div>
                            {/* img2 */}
                            <div>
                                <div className='h-[280px] w-[236px] mt-4'>
                                    <img src={img2} alt="" />
                                    <p className='text-2xl font-bold mt-2'>Dolphin</p>
                                    <p className='text-sm'>Freshteam. Save time and reduFreshteam. Save time an reduceFreshteam. Save time and reduceFreshteam. Save time and reduce</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex justify-center items-center'>
                        {/* 3rd */}
                        <div className='h-[280px] w-[236px]'>
                            <img src={img3} alt="" />
                            <p className='text-2xl font-bold mt-2'>Rabbit</p>
                            <p className='text-sm'>Freshteam. Save time and reduFreshteam. Save time an reduceFreshteam. Save time and reduceFreshteam. Save time and reduce</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opinion;