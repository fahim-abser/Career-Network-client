import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaGooglePlusG,FaLinkedin,FaGithub } from 'react-icons/fa';
import { RiEarthLine } from 'react-icons/ri';

const CandidateProfile = () => {
    const profile = useLoaderData()
  
    const {image,name,profession,email,linkedin,github,portfolio,location,about,skills,phone} = profile
    const skillsList = skills.split(',')
    return (
        <div>
            <div class="flex items-center py-2 overflow-x-auto whitespace-nowrap">
                <Link to="/" class="text-sky-700 dark:text-gray-200">
                    Home
                </Link>

                <span class="mx-2 text-sky-700 dark:text-gray-300 rtl:-scale-x-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </span>

                <p class="text-sky-700 dark:text-gray-200 ">Profile</p>
            </div>

            <div className='lg:grid grid-cols-5 m-10'>
                {/* info */}
                <div className='col-span-3'>
                        <div className='flex '>
                                <img className='rounded-lg' src={image} alt="" />
                                <div className='mx-10 my-20'> 
                                    <h1 className='text-4xl font-bold '>{name}</h1>
                                    <p className='text-lg'>{profession}</p>
                                </div>
                        </div>
                        <div className='my-10'>
                            <h1 className='text-2xl font-bold mb-1'>About {name}</h1>
                            <p className='text-lg'>{about}</p>
                        </div>
                        <div className='my-10'>
                            <h1 className='text-2xl font-bold mb-1'>Job skills</h1>
                            <ul className='ml-5'>
                            {skillsList.map(skill => <li className='list-disc text-lg '>{skill}.</li>)}
                            </ul>
                        </div>
                </div>
                <div className='col-span-2 mx-2 lg:mx-6 '>
                    <div className='mt-10 mx-10 w-full h-[275px] border rounded p-8 border-white shadow-lg text-xl'>
                        <p className='flex justify-between mb-2'>Location :  <span className=''>{location}</span></p>
                        <p className='flex justify-between mb-2'>Phone Number :  <span className=''>{phone}</span></p>
                        <p className='flex justify-between mb-2'>Email :  <span className=''>{email}</span></p>
                        <div className='mx-6 my-6'>
                            <ul className='flex justify-around'>
                                <a href={linkedin}><FaLinkedin size={25}/></a>
                                <a href={portfolio}><RiEarthLine size={25}/></a>
                                <a href={github}><FaGithub size={25}/></a>
                                <a href="gmail.com"><FaGooglePlusG size={25}/></a>

                            </ul>

                            <button className='btn btn-primary w-full my-10'>Download Resume</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateProfile;