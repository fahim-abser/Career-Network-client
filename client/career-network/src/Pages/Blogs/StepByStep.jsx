import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const StepByStep = () => {
    return (
        <div className='m-10 grid grid-cols-1 lg:grid-cols-4'>
            <div className='bg-slate-50 shadow rounded-xl col-span-3'>
                <h1 className='text-2xl text-green-600 ml-10 mt-3'>How to Make Standard CV</h1>
                <div className='m-8'>
                    <div className='rounded-xl bg-gray-100 text-black border shadow-2xl p-6'>
                    <p>Your Curriculum Vitae (CV) is the primary medium of presenting yourself as a candidate for a job to a prospective employer. But many of the job seekers do not give proper attention and care in preparing their CVs accurately. As a result, many potential job seekers do not get calls for job interviews to get the opportunity to present and prove their potential.</p> <hr className='my-3' />

                        <h1 className='text-xl text-gray-700'>Attention should be given to the following matters before preparing your CV:
                        </h1>
                        <div className='mt-3 text-sm'>
                            <li>Generally an employer does not give more than 30 seconds time in looking at a CV briefly. So a CV should be precise and clear. Unnecessary and irrelevant information should be avoided.</li>
                            <li>A CV of a fresher or an inexperienced candidate should not be over one or two pages.
                            </li>
                            <li>Your CV is the way to promote yourself. Therefore, it should be attractive. But color papers or color print should not be used for this purpose. In case of highlighting any information, you can Bold, italicize or underline it.</li>
                            <li>Remember that any type of grammatical or spelling mistake in your CV will create a negative impact in the mind of the employer. It will give the impression that you cannot do any work correctly. So after preparing your CV, read it intensely and let it checked by somebody who knows correct English.
                            </li>
                            <li>
                                When applying for a particular job announcement, try to customize your CV according to the job requirements. You need to read the job announcement carefully and make some research on it. For example, if you know the information that the employer can locate the job anywhere in Bangladesh, you may mention the places you have visited and stayed in Bangladesh. Again, when the employer is looking for an Organizer, you can mention the organizing activities you have done in your student life. It will create an additional value in your CV.

                            </li>
                            <li>It is very important that you should give true and correct information in your CV. You should not give any information that can appear as false the job interview.
                            </li>
                        </div>
                        <h1 className='text-xl text-gray-700 mt-3'>The following information is to be presented in a CV in an organized way:
                        </h1>
                        <div className='text-sm'>
                            <li>Title</li>
                            <li>Career Summary – mostly applicable for the experienced persons.</li>
                            <li>Career objective – mostly applicable for the fresh applicants.
                            </li>
                            <li>Experience</li>
                            <li>Education</li>
                            <li>Addition Information</li>
                            <li>Personal Information</li>
                            <li>Reference</li>
                        </div>
                        <h1 className='text-xl text-gray-700 my-3'>Title</h1>
                        <p className='text-sm'>Your name will come first in the title. It should be in 'bold' format and in a larger font (avoid using your nick name). Then write your address (your present address where you can receive mails by post), phone number and email address. This portion will be on the center of the page to draw the attention.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Career Summary</h1>
                        <p className='text-sm'>
                            This is mostly applicable for the persons having experience more than 4-5 years. State the sectors of your experience in maximum 6 to 7 lines. State in short the achievements of your career (if any).
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Career Objective</h1>
                        <p className='text-sm'>

                            This section is generally applicable for the fresh candidates or the candidates with little experience (1- 2 years). Mention the immediate goal of your career in this part. Also mention how your experience and potential match with the position you are applying for. Bring up your positive skills for the position. It is important to write your career objective according to the criteria mentioned in the job announcement. Give emphasis on the ways you can make contribution for the company and what is your expectation from the company.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Experience</h1>
                        <p className='text-sm'>

                            For the experienced candidates, this section should come before the 'Educational Qualification' section.
                            Things that you should mention in your experience details are as follows:
                            <li>Organization name</li>
                            <li>Designation</li>
                            <li>Time Period – From & To</li>
                            <li>Job Responsibility</li>
                            <li>Special Achievement</li>
                            If you have working experience in different positions in a same organization, mention it in different phases.
                            State your most recent experience first and then mention one by one your other experiences in the Resume following Chronological Order which is to end with your first experience.
                            It is better not to mention experience of short and insignificant experience. Try not to have long gap of time between the jobs.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Education & Training</h1>
                        <p className='text-sm'>
                            <li>Education & training part should come before experience part for a fresher. You will mention your degrees in education part with the following information.</li>
                            <li>Name of degree (Such as SSC, HSC, B.Com)</li>
                            <li>Duration of course</li>
                            <li>Name of institutions and board.</li>
                            <li>Year of Examination and date of publishing result (if necessary),</li>
                            <li>Result and achievement (if any)</li>
                            You should mention your most recent degree first like your experience part, then mention the other degrees by turn. <br /> <br />
                            Remember that you should mention 'appeared' if the final result is not yet published. Please mention 'ongoing' if you are continuing any program. You need not to mention the result of any degree if any of the result is a very poor one. Remember that, it looks odd if you mention the result of one degree and avoid another. <br /><br />
                            If you participate in any particular training program that supports your work experience, you should mention it. Mention the training institution, topic and duration of training. You can place the list of training right after the education part.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Additional Information</h1>
                        <p className='text-sm'>

                            The information that does not fall in the above mentioned parts but is related with the job must be shown in this part. For example:
                            <li>Professional Achievement</li>
                            <li>Award</li>
                            <li>Language Proficiency</li>
                            <li>Computer skills</li>
                            <li>License, government identity, publications and authorization.</li>
                            <li>Voluntary work etc.</li>
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Personal information</h1>
                        <p className='text-sm'>

                            You can mention your parent's name, present and permanent address, religion, traveling places (Country) if any, hobby etc. in this section. <br />
                            Reference - You should not mention the name of any close relative as referee in reference part. Referees should be the persons who have seen you closely in your student life or working life. You must mention the phone number, address and e-mail (if any) of your referee. It is better to mention two or three persons as referees. It is important to inform your referee that you have mentioned his name as referee in your CV.
                        </p>
                    </div>
                    <h1 className='mt-5 text-green-600 text-2xl font-bold'>Tips for Creating an Effective Resume</h1>
                    <div className='rounded-xl bg-gray-100 text-black border shadow-2xl mt-10 p-6'>
                        <p>When an employer looks at your resume, you've got about 30 seconds to make a good impression. That's the average amount of time most employers spend reading a resume. To capture the reader's attention, you need to be clear and to-the-point. And, that's not all. Keep in mind the following guidelines to create an effective resume:</p>

                        <h1 className='text-xl text-gray-700 my-3'>Be Concise and Omit Irrelevant Information
                        </h1>
                        <p className='text-sm'>
                            Employers don't want to read a long, drawn-out version of your life's accomplishments. They have stacks of resumes to read, and want to know quickly whether or not you would be a good fit for their company. So, be concise, and exhibit your skills and abilities.
                            A resume should only include information that will help convince an employer to interview you. Descriptions of relevant skills and accomplishments should be concise and to the point. Including irrelevant experience and lengthy descriptions will bury the important information. Only include personal information where it demonstrates an important personal quality or qualification. A resume should represent what you can do on the job, not what you do in your personal life.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Don't Forget Your Objective
                        </h1>
                        <p className='text-sm'>

                            Before diving into writing your resume, plan out your career objective. Make it clear and focused. Remember to keep the message consistent throughout your resume as you summarize your skills and accentuate your strengths.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Write a Powerful Opening Statement
                        </h1>
                        <p className='text-sm'>
                            If you are a recent graduate or have limited experience in your career, you should include a Job Objective statement at the top of your resume, which will help focus the reader's attention and describe what type of position you are looking for.
                            If you have experience in your career field, you want a powerful Summary statement that illustrates your best qualifications for the position at the top of the resume. A well-crafted opening statement should convince an employer to keep reading.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Use Industry Jargon
                        </h1>
                        <p className='text-sm'>

                            Use industry jargon and acronyms to reflect your familiarity with the employer's business, but not to the point where it makes your resume hard to read or understand. Spell out acronyms in parentheses if they are not obvious, such as TQM (Total Quality Management).
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Customize It: Focus on Your Benefit to Employers
                        </h1>
                        <p className='text-sm'>

                            Describe your experience in a way that relates to the skills the employer is seeking. Focus on highlighting accomplishments that will arouse the interest of employers who read your resume. Answer the question: "How can this candidate fulfill the role and make a positive impact?" If a company is looking for a candidate who has leadership ability, highlight your experience in training new employees or in managing projects. Remember that the goal is to get the interview.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Include Keywords
                        </h1>
                        <p className='text-sm'>

                            Draw attention to your resume with keywords that describe your skills and experience. Inserting descriptive keywords in your resume is becoming more important as an increasing number of companies search for resumes in computer databases that find matches through keywords. These words should relate to the job you are applying for while highlighting your own skill set.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Use Action-Benefit statements: Avoid Boring List of Job Responsibilities
                        </h1>
                        <p className='text-sm'>
                            The best resumes describe experience using Action-Benefit statements, which describe an action you took in response to a challenge or opportunity, and explain how your action had a positive benefit for your company. This method brings your experience statements to life and demonstrates how you can achieve success and produce results. <br /> <br />
                            An Action-Benefit statement might read "Analyzed declining sales and developed campaign that increased orders by 30% in less than one month." This statement describes the situation or challenges you faced (declining sales), the
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Quantify Your Achievements
                        </h1>
                        <p className='text-sm'>

                            You need to give the reader an idea of what you have done throughout your career, but instead of focusing on the duties you were responsible for at your last jobs, list your accomplishments in action-benefit statements along with quantifiable facts to back up your claims. Use numbers, percentages and dollar amounts to show your success in achieving company goals. Instead of writing "Responsible for increasing sales in my territory," use "Increased sales in my territory 150% over 6 months. Managed 30 accounts increasing revenues from $1.5M to $2M annually."
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Use Action Verbs
                        </h1>
                        <p className='text-sm'>
                            Portray yourself as active, accomplished, intelligent, and capable of contributing. Examples: Managed, Launched, Created, Directed, Established, Organized, and Supervised. Never use the same action word repeatedly. Instead of using a word like 'directed' over and over, use synonyms such as controlled, supervised, guided, or managed. Utilize a thesaurus, career advice Web sites and other sources if you are having problems coming up with new ways to say the same thing.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Be Professional, Not Personal
                        </h1>
                        <p className='text-sm'>

                            You do not have much room in a resume, so why take up valuable space with information unrelated to the position you are seeking? Focus on your work experiences and never refer to personal information such as race, religion, marital status, age, political party, or even personal views. In all but a few instances, it would be illegal for the employer to consider such issues. Also, avoid the use of humor and clichés in resumes and forget about mentioning the fact that you enjoy horror movies and surfing in your spare time.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'> Personal Traits
                        </h1>
                        <p className='text-sm'>

                            If you want to include personal traits in your resume, such as "Dependable, Highly-Organized, Self-Motivated, and Responsible," rather than just listing these traits, try demonstrating these characteristics using examples from your experience. For example, instead of writing "Dependable," write "Never missed an important deadline in five years as a project manager."
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Keep a Positive Tone
                        </h1>
                        <p className='text-sm'>

                            Your resume should present you in the best possible light. If you don't possess every skill an employer is seeking, do not emphasize your shortcomings. Focus on what you can offer.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Be Honest
                        </h1>
                        <p className='text-sm'>

                            Lying or exaggerating about your skills and abilities will only come back to haunt you.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Be Organized and Logical
                        </h1>
                        <p className='text-sm'>

                            In addition to reviewing your experience, employers also use the resume to sense whether you are organized, logical, and concise. Make sure your resume is balanced, neat, visually appealing, and flows consistently. Clearly separate sections and emphasize section titles.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Just Communicate
                        </h1>
                        <p className='text-sm'>

                            Abandon the use of exorbitant, exquisite vocabulary. In other words, don't try to impress employers with the depth of your vocabulary. Use words everyone can understand.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Combine Sections When Possible
                        </h1>
                        <p className='text-sm'>
                            Try to combine any short sections together to make your resume more compact. For example, if you only have one entry under training, consider placing it under your education instead and change the section title to "Education and Training."
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Use Common Section Headings
                        </h1>
                        <p className='text-sm'>
                            Use common section headings. Examples: Objective, Experience, Employment, Work History, Skills, Summary, Summary of Qualifications, Accomplishments, Achievements, Capabilities, Education, Professional Affiliations, Publications, Licenses and Certifications, and Honors.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Omit Salary Information
                        </h1>
                        <p className='text-sm'>
                            Never refer to salary in your resume. Save this information for the interview.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Avoid Writing in First Person ("me" or "I")
                        </h1>
                        <p className='text-sm'>

                            Your resume is not a personal correspondence, and should not include words such as "I," "my," or "me." Replace such personal pronouns with short action statements. Instead of saying, "I wrote several articles for the company newsletter," try, "Researched and wrote several articles for the company newsletter." Save the first person pronouns for your cover letter.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Placing Professional Titles
                        </h1>
                        <p className='text-sm'>
                            There are several places where it would be appropriate to put your professional title. You can place your title next to your name in the format "Ahmed Abdullah, FCA." You can include it in your Summary, Education, or Licenses/Certifications sections. If your title is an important qualification in your job search, be sure it appears at the top of your resume.
                        </p>
                        <h1 className='text-xl text-gray-700 my-3'>Including References in Your Resume
                        </h1>
                        <p className='text-sm'>
                            You do not have to include references on your resume. Most employers will assume you can provide references if they are requested.
                        </p>
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

export default StepByStep;