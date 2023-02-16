import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MakeResume = () => {
    return (
        <div className='m-10 grid grid-cols-1 lg:grid-cols-4'>
            <div className='bg-slate-50 shadow rounded-xl col-span-3'>
                <h1 className='text-2xl text-green-600 ml-10 mt-3'>How to Make a Strong Resume That Secures Interviews
                </h1>
                <div className='m-8'>
                    <div className='rounded-xl bg-gray-100 text-black border shadow-2xl p-6'>
                        <p>Have you ever thought of your resume as a personal marketing tool? If not, maybe it's time you do. Your resume should be designed to electrify potential employers by highlighting your most valuable skills and achievements. Get started by using our sure-fire tips.</p> <hr className='my-3' />
                        <h1 className='text-xl text-gray-700 mt-3'>Use Numbers
                        </h1>
                        <li className='text-sm'>Quantify your achievements by using facts and figures that demonstrate results, such as dollars saved or number of people supervised.</li>
                        <li className='text-sm'>Spell out numbers under and including "ten" and use the numerical form for 100 and beyond.
                        </li>
                        <h1 className='text-xl text-gray-700 my-3'>Keep it simple
                        </h1>
                        <li className='text-sm'>Make certain the job title you use is easily understandable by your reader (ie: Tax Accountant vs. Accounting Specialist II )
                        </li>
                        <li className='text-sm'>Don't bother using obscure vocabulary, select familiar words.
                        </li>
                        <li className='text-sm'>Utilize bullet points with short phrases.
                        </li>
                        <h1 className='text-xl text-gray-700 my-3'>Follow The Right Form
                        </h1>
                        <li className='text-sm'>Instead of complete sentences, use short action phrases to list your accomplishments.
                        </li>
                        <li className='text-sm'>Avoid repeating the same action verb.
                        </li>
                        <li className='text-sm'>When describing a current position, use the present tense and vise versa when describing a past one.
                        </li>
                        <li className='text-sm'>Keep the length to one or two pages.
                        </li>
                        <h1 className='text-xl text-gray-700 my-3'>Update It
                        </h1>
                        <li className='text-sm'>Update your resume every six months, even if you aren't actively looking for a job.
                        </li>
                        <li className='text-sm'>Show your work experience for the last 10-15 years.
                        </li>
                        <h1 className='text-xl text-gray-700 my-3'>Make It Look Good
                        </h1>
                        <li className='text-sm'>Use standard 8-1/2 x 11 inch paper.

                        </li>
                        <li className='text-sm'>Soft colors such as white or beige are recommended, especially for scanning and copying purposes.

                        </li>
                        <li className='text-sm'>Don't forget to include matching envelopes.

                        </li>
                        <li className='text-sm'>Typeface should be easy-to-read (Courier, Times New Roman or Arial), so avoid the fancy script-like fonts. Stick to black ink.

                        </li>
                        <li className='text-sm'>Font size should be between 10-12 pts.

                        </li>
                        <li className='text-sm'>Highlight section headers with boldface type.

                        </li>
                        <li className='text-sm'>Be consistent by single spacing for individual sentences and double spacing between sections and paragraphs.

                        </li>
                        <li className='text-sm'>Make sure your margins have at least one inch of white space on the top and no less than one half-inch on the other three sides.

                        </li>
                        <li className='text-sm'>When printing your resume, look for a watermark. Hold your paper up to the light and you'll typically see the brand of the paper. Make sure the mark is right side up when you print.

                        </li>
                        <li className='text-sm'>Consider sending your resume in a 9x12 inch envelope so it doesn't have to be folded.

                        </li>
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

export default MakeResume;