import React from 'react';
import { Link } from 'react-router-dom';
import { GrFacebook, GrLinkedin, GrTwitter, GrInstagram } from 'react-icons/gr'
import logo1 from '../../../logo/logo.png'
const Footer = () => {
    return (
        <footer class="bg-[#263238] dark:bg-gray-900 p-2 font-sans mt-2">
            <div class="container lg:px-14 px-4  py-6 ">


                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <p class="font-semibold text-white text-lg uppercase dark:text-white">Company</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <Link to="#" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> About</Link>
                            <Link to="#" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Careers</Link>
                            <Link to="#" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Resource center</Link>
                            <Link to="#" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Guides</Link>

                        </div>
                    </div>


                    <div>
                        <p class="font-semibold text-white text-lg uppercase dark:text-white">JOB CATEGORIES</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <Link to="/category/Web%20Developer" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Development</Link>
                            <Link to="/category/Designer" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Designer</Link>
                            <Link to="/category/Marketing" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Marketing</Link>
                            <Link to="/category/Education" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-blue-400  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Education</Link>

                        </div>
                    </div>


                    <div>
                        <p class="font-semibold text-white text-lg uppercase dark:text-white">Blogs</p>

                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <Link to="/blog/interview" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-white  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Career Tips</Link>
                            <Link to="/blog/interview" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-white  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Interview</Link>
                            <Link to="/blog/resume" class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-white  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Resume</Link>
                            <Link to='/blog/coverletter' class=" text-[#C0C1C1] transition-colors duration-300 dark:text-gray-300  dark:hover:text-white  hover:text-white"><span className='text-3xl font-bold text-[#27B163] pr-1 '>-</span> Cover Letter</Link>

                        </div>
                    </div>

                    <div>
                        <p class="font-semibold text-white text-lg uppercase dark:text-white">Company</p>

                        <div class=" mt-5 ">
                            <div class="">
                                <form>
                                    <div class="flex   overflow-hidden rounded  dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                                        <input class="px-6 w-36   text-gray-700 placeholder-gray-500 rounded rounded-r-none bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Email" aria-label="Enter your email" />

                                        <button class="p-2  py-3 text-sm font-medium tracking-wider rounded-l-none text-gray-100 uppercase transition-colors duration-300    transform bg-[#26AE61] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <p class="font-semibold text-white text-md mt-6 uppercase dark:text-white">Follow Us</p>
                        <div className='mt-5 flex gap-4'>
                            <GrFacebook className='text-[#C0C1C1] hover:text-white cursor-pointer'></GrFacebook>
                            <GrTwitter className='text-[#C0C1C1] hover:text-white cursor-pointer'></GrTwitter>
                            <GrLinkedin className='text-[#C0C1C1] hover:text-white cursor-pointer'></GrLinkedin>
                            <GrInstagram className='text-[#C0C1C1] hover:text-white cursor-pointer'></GrInstagram>
                        </div>
                    </div>
                </div>

                <hr class="my-6 border-green-900 md:my-10 dark:border-gray-700" />

                <div class="lg:flex text-center justify-between sm:flex-row">
                    <div className='lg:flex items-center gap-24'>
                        <div href="#">
                           <h1 className='text-xl text-green-500 text-center'>Career Network</h1>
                        </div>
                        <p class="mt-4 lg:mb-0 mb-4 text-sm text-white sm:mt-0 dark:text-gray-300">Copyright © 2022 slidesigma. All Right Reserved.</p>
                    </div>


                    <div class="flex  ml-10 mb-4  items-center gap-10 text-sm ">
                        <Link to="#" class=" text-white transition-colors duration-300 dark:text-gray-300  dark:hover:text-white  hover:text-white">About</Link>
                        <Link to="#" class=" text-white transition-colors duration-300 dark:text-gray-300  dark:hover:text-white  hover:text-white">Categories</Link>
                        <Link to="#" class=" text-white transition-colors duration-300 dark:text-gray-300  dark:hover:text-white  hover:text-white">Blogs</Link>
                        <Link to="#" class=" text-white transition-colors duration-300 dark:text-gray-300  dark:hover:text-white  hover:text-white">FAQ</Link>

                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;