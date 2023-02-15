import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ChooseKey = () => {
    return (
        <div className='m-10 grid grid-cols-1 lg:grid-cols-4'>
            <div className='bg-slate-50 shadow rounded-xl col-span-3'>
                <h1 className='text-2xl text-green-600 ml-10 mt-3'>Looking for the Perfect Resume Words to Describe Your Work History? <br /> We've Got Those Here
                </h1>
                <div className='m-8'>
                    <div className='rounded-xl bg-gray-100 text-black border shadow-2xl p-6'>
                    <p>Have you ever thought of your resume as a personal marketing tool? If not, maybe it's time you do. Your resume should be designed to electrify potential employers by highlighting your most valuable skills and achievements. Get started by using our sure-fire tips.</p> <hr className='my-3' />
                    </div>
                </div>
            </div>
            <div className='mt-20 bg-orange-300 h-60 ml-10 rounded-xl p-3'>
                <div className='text-center'>
                    <h1 className='font-bold text-lg '>Blogs</h1>
                    <hr className='mt-2' />

                </div>
                <div className='mt-5'>
                    <div className='my-3 hover:text-blue-500'>
                        <Link to='/blog/interview '><li>Interview Tips</li></Link>
                    </div>
                    <div className='my-3 hover:text-blue-500 flex'><Link to='/blog/resume'><li>Resume Building Tips</li></Link>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className=""><MdArrowDropDown></MdArrowDropDown></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-orange-200 rounded-box w-52">
                                <li className='hover:text-black'><Link to='/blog/resume/makeresume'>Make a strong resume</Link></li>
                                <li className='hover:text-black'><Link to='/step'>Step by step</Link></li>
                                <li className='hover:text-black'><Link to='/chooseKey'>Choose your keywords</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='my-3 hover:text-blue-500'><Link to='/blog/coverletter'><li>Cover Letter Tips</li></Link></div>
                    <div className='mt-2 hover:text-blue-500'>
                        <Link to='/blog/Article'><li>Articles</li></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseKey;