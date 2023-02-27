import React from 'react';
import { Link } from 'react-router-dom';
import { GrFacebook, GrLinkedin, GrTwitter, GrInstagram } from 'react-icons/gr'
import logo1 from '../../../logo/logo.png'
const Footer2 = () => {
    return (
        <footer class="bg-[#1E293B] sticky top-[100vh] dark:bg-gray-900  font-sans mt-2">
            <div class="container lg:px-14 px-4  py-6 ">


 

               

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

export default Footer2;