import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className=' m-10 grid grid-cols-1 lg:grid-cols-4'>
            <div className='bg-slate-50 shadow rounded-xl col-span-3'>
                <h1 className='ml-12 mt-3 text-3xl text-green-800 '>Interview Tips</h1>
                <div className='m-8'>
                    <div className='rounded-xl bg-gray-100 text-black border shadow-2xl p-6'>
                        <h1 className='text-xl text-orange-600 mb-2 font-bold'>Introduction:</h1>
                        <p>The interview is when employers will get to know your personality, interests, goals, and objectives. You will no longer be a list of skills and experiences on a piece of paper; this is your opportunity to give specific examples and anecdotes and explain how these experiences make you the perfect candidate for the position. It is the perfect time to demonstrate your interest in the position and your knowledge about the company and the industry. This is the time for the employer to find out who you are, so be yourself.</p>
                        <hr className='mt-3' />
                        <h1 className='mt-3 text-orange-600 text-xl mb-2 font-bold'>What Employers Are Looking For:</h1>
                        <p>Interviews can be very stressful, but the best way to overcome this is to be prepared and know what employers are looking for: </p> <br />
                        <ol>
                            <li>Job candidates with a definite idea of their goals, objectives, strengths, and skills.</li><br />
                            <li>Candidates who are knowledgeable about the position they are interviewing for, the company and its products, and the industry overall.</li><br />
                            <li>Candidates who can match their own skills and experiences with the needs of the company.</li><br />
                            <li>Candidates who are confident in themselves and their ability to contribute to the company.
                            </li><br />
                            <li>Candidates who can discuss past experiences and give specific examples that demonstrate their skills and accomplishments.
                            </li>
                        </ol><hr className='my-3' />
                        <h1 className='text-orange-600 text-xl mb-2 font-bold'>Prepare Beforehand:</h1>
                        <p>
                            Another way to decrease the stress of an interview is to prepare beforehand. Review your resume and make sure you know your skills, experiences, goals, interests, accomplishments, and objectives inside and out. You'll be asked a lot of open-ended questions, and you will need to be able to give specific examples and articulate yourself clearly and concisely. <br /> <br />
                            Familiarize yourself with the most common Questions Asked by an Employer. Develop answers to these questions, but do not memorize your answers. Make sure all of your responses are positive and highlight your skills and accomplishments. When asked about difficult or negative experiences, describe those experiences as learning experiences. <br /> <br />
                            During the interview, the employer will not be the only person asking questions; you are expected to ask questions throughout the interview, as well as at the end when the inevitable question is asked: "So, do you have any questions for me?" Always ask questions. If the employer has answered all of your questions already, come up with something else to ask about. Your questions can demonstrate your interest in the position and your knowledge about the company and industry. Keep your entire questions job related.
                        </p> <hr className='my-3' />
                        <h1 className='text-orange-600 text-xl mb-2 font-bold'>TIPS FOR INTERVIEW:</h1>
                        <p>Here are a few suggestions on how to approach the interview process:</p><br />
                        <ul>
                            <li><span className='font-bold text-gray-500'>Research the company.</span> It is good to become familiar with the organization, the position and the person who may be your boss. Try to match your skills and experience to the position you are seeking.</li><br />
                            <li><span className='font-bold text-gray-500'> Look good.</span> First impressions are lasting, so make it count. Projecting a confident and professional image is essential. Dress professionally, but don't overdo it with jewelry or excessive perfume or cologne.</li><br />
                            <li><span className='font-bold text-gray-500'>Know the location of the interview.</span>  Consider driving/ arriving at the location in advance. Rushing around trying to find the facility can add to your nervousness.</li><br />
                            <li><span className='font-bold text-gray-500'>Know your resume.</span> Be prepared to discuss and defend every aspect of your education and career experience.</li><br />
                            <li><span className='font-bold text-gray-500'> Focus more on the interview, less on the job.</span> There's time to evaluate the job and whether you want it after the interviewer has learned about you. For now, your goal is to get invited back for a second interview or an offer. Then you can decide if the job is just what you want.</li><br />
                            <li><span className='font-bold text-gray-500'> Talk about your previous contributions.</span> Prospective employers are interested in knowing how you made a difference in your previous job. In a way, you need to convince the interviewer that you're the answer to the company's needs.</li><br />
                            <li><span className='font-bold text-gray-500'> Look for ways to sell yourself.</span> Seize opportunities to tell the prospective employer how good you are. Be careful not to boast, but speak confidently about your skills.</li><br />
                            <li><span className='font-bold text-gray-500'>Don't overdo it.</span> Choose your words carefully and don't talk too much. Most people only retain 20 percent of what they hear. Select your words, speak clearly and get to the point.</li><br />
                            <li><span className='font-bold text-gray-500'>Avoid fear by visualizing the interview.</span> It's just an interview, not the gallows, so imagine the experience in advance. Try to visualize various things like your clothing, items to bring, physical presentation, eye contact, body language, etc.</li><br />
                            <li><span className='font-bold text-gray-500'>Listen carefully.</span> Pause briefly after each question before you respond to be sure the interviewer has finished speaking. Answer questions directly and concisely. If you don't understand, ask for clarification.
                            </li><br />
                            <li><span className='font-bold text-gray-500'> Bring your questions.</span> You also are interviewing the company, too. Start with questions about the organization and move to career growth, working conditions, etc. Save benefits and compensation for last.
                            </li><br />
                            <li><span className='font-bold text-gray-500'> Write down important data.</span> Get the names and titles of the people with whom you interview. Be sure the spelling is correct, as you may need the information later.
                            </li><br />
                            <li><span className='font-bold text-gray-500'>Don't run away.</span> After the interview, don't just hop up and head down the hall. Try to leave a good final impression by letting the interviewer know you really want the job and that you're ready to move to the next step in the employment process. If that doesn't feel right, simply ask about the next step in the process.
                            </li><br />
                            <li><span className='font-bold text-gray-500'>Obtain resources.</span> Grab an annual report, product information or other data that will give you a better picture of the company and the kind of work you might be doing.
                            </li><br />
                            <li><span className='font-bold text-gray-500'>Don't become invisible.</span> Following the interview there is a way in which you can be contacted, even if you are out of town.
                            </li><br />
                        </ul><hr className='my-4' />
                        <h1 className='text-orange-600 text-lg mb-2 font-5old'>TYPICAL QUESTIONS ANSWERED:
                        </h1>
                        <p>
                            Here is a list of the repeated questions that relate to almost any type of job. Please note that an interviewer may also ask questions that relate to the specific position that you are applying for.
                        </p><br />
                        <h1 className='text-lg text-blue-500 font-bold'>1. Tell something about yourself</h1>
                        <p className='ml-5'>The most often asked question in interviews. You need to have a short statement prepared in your mind. Be careful that it does not sound rehearsed. Limit it to work-related items unless instructed otherwise. Talk about things you have done and jobs you have held that relate to the position you are interviewing for. Start with the item farthest back and work up to the present. Since this is often the opening question in an interview, be extra careful that you don't run off at the mouth. Keep your answer to a minute or two at most. Cover five topics including personal introduction, early years, education, work history, and recent career experience. Emphasize this last subject. Remember that this is likely to be a warm-up question. Don't waste your best points on it.</p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>2. What is your greatest / best strength? Or, what is your strength?
                        </h1>
                        <p className='ml-5'>For this question numerous answers are good, just stay positive. A few good examples may be a. Your ability to prioritize, b. Your problem-solving skills, c. Your ability to work under pressure, d. Your ability to focus on projects, e. your professional expertise, f. your leadership skills, g. your positive attitude towards works etc., in addition to your strong academic background.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>3.Tell something about your weakness. Or what are your weakness?
                        </h1>
                        <p className='ml-5'>The interviewer who asks this question is looking to see how honest you are with yourself, and how well you deal with your own shortcomings.
                            Bit of a tricky question this, after all no one wants to show their weaknesses but we all have them. Don't pretend you don't have weaknesses, and don't avoid answering the question. This is your chance to show that you are honest and take responsibility for your actions.
                            A good way to answer this question is to mention your weakness, then tell what you have done to overcome that weakness. If you have been disorganized in the past, you could say, "I used to be very disorganized, always forgetting assignments and birthdays. But I managed to work out a computerized system of to-do lists and reminders that keeps me on top of everything. "You could also say, I don't have straight way transport or bus service from my residence to the office. So, during the rainy days I had difficulties in finding a rickshaw to reach the bus stop and I would get late, occasionally. Now on the raining days, I get up earlier in the morning and rush out to my office to reach on time."
                            The most comprehensive way of dealing with this question is to try and turn it into a "positive" from a "negative".
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>4.Do you consider yourself successful?

                        </h1>
                        <p className='ml-5'>You should always answer yes and briefly explain why. A good explanation is that you have set goals, and you have met some and are on track to achieve the others.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>5.What do you know about this organization?
                        </h1>
                        <p className='ml-5'>This question is one reason to do some research on the organization before the interview. Find out where they have been and where they are going. You should be able to discuss products or services, revenues, reputation, image, goals, problems, management style, people, history and philosophy. But don't act as if you know everything about the place. Let your answer show that you have taken the time to do some research, but don't try to overwhelm the interviewer, and make it clear that you wish to learn more. You might start your answer in this manner: "In my job search, I've investigated a number of companies. Yours is one of the few that interests me, for these reasons..."
                            Give your answer a positive tone. Don't say, "Well, everyone tells me that you're in all sorts of trouble, and that's why I'm here", even if that is why you're there
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>6.Are you applying for other jobs?
                        </h1>
                        <p className='ml-5'>Be honest but do not spend a lot of time in this area. Keep the focus on this job and what you can do for this organization. Anything else is a distraction.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>7.Why do you want to work for this organization?
                        </h1>
                        <p className='ml-5'>This may take some thought and certainly, should be based on the research you have done on the organization. Sincerity is extremely important here and will easily be sensed. Relate it to your long-term career goals.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>8.Your resume suggests that you may be over-qualified or too experienced for this position. What's your opinion?
                        </h1>
                        <p className='ml-5'>Emphasize your interest in establishing a long-term association with the organization, and say that you assume that if you perform well in his job, new opportunities will open up for you. Mention that a strong company needs a strong staff. Observe that experienced executives are always at a premium. Suggest that since you are so well qualified, the employer will get a fast return on his investment. Say that a growing, energetic company can never have too much talent.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>9.What important trends do you see in our industry?
                        </h1>
                        <p className='ml-5'>Be prepared with two or three trends that illustrate how well you understand your industry. You might consider technological challenges or opportunities, economic conditions, or even regulatory demands as you collect your thoughts about the direction in which your business is heading.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>10.Why did you leave your last job?
                        </h1>
                        <p className='ml-5'>Stay positive regardless of the circumstances. Never refer to a major problem with management and never speak ill of supervisors, co-workers or the organization. If you do, you will be the one looking bad. Keep smiling and talk about leaving for a positive reason such as an opportunity, a chance to do something special or other forward-looking reasons.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>11.What experience do you have in this field?
                        </h1>
                        <p className='ml-5'>Speak about specifics that relate to the position you are applying for. If you do not have specific experience, get as close as you can.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>12.What kind of salary do you need?
                        </h1>
                        <p className='ml-5'>A loaded question. A nasty little game that you will probably lose if you answer first. So, do not answer it. Instead, say something like, "that's a tough question. Can you tell me the range for this position?"
                            <br />
                            In most cases, the interviewer, taken off guard, will tell you. If not, say that it can depend on the details of the job. Then give a wide range. If you are asked the question during an initial screening interview, you might say that you feel you need to know more about the position's responsibilities before you could give a meaningful answer to that question. Here, too, either by asking the interviewer or 'Executive Search firm' (if one is involved), or in research done as part of your homework, you can try to find out whether there is a salary grade attached to the job. If there is, and if you can live with it, say that the range seems right to you. But whenever possible, say as little as you can about salary until you reach the "final" stage of the interview process. At that point, you know that the company is genuinely interested in you and that it is likely to be flexible in salary negotiations.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>13.Explain how you would be an asset to this organization.
                        </h1>
                        <p className='ml-5'>You should be anxious for this question. It gives you a chance to highlight your best points as they relate to the position being discussed. Give a little advance thought to this relationship.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>14.Tell me about your dream job.
                        </h1>
                        <p className='ml-5'>Stay away from a specific job. You cannot win. If you say the job you are contending for is it, you strain credibility. If you say another job is it, you plant the suspicion that you will be dissatisfied with this position if hired. The best is to stay generic and say something like: A job where I love the work, like the people, can contribute and can't wait to get to work.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>15.What is more important to you: the money or the work?
                        </h1>
                        <p className='ml-5'>Money is always important, but the work is the most important. There is no better answer.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>16.What has disappointed you about a job?
                        </h1>
                        <p className='ml-5'>Don't get trivial or negative. Safe areas are few but can include: <br />
                            Not enough of a challenge. You were laid off in a reduction Company did not win a contract, which would have given you more responsibility.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>17.Tell me about your ability to work under pressure.
                        </h1>
                        <p className='ml-5'>You may say that you thrive under certain types of pressure. Give an example that relates to the type of position applied for.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>18.What motivates you to do your best on the job?
                        </h1>
                        <p className='ml-5'>This is a personal trait that only you can say, but good examples are: <br />
                            Challenge, Achievement, Recognition
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>19.Would you be willing to relocate if required?
                        </h1>
                        <p className='ml-5'>You should be clear on this with your family prior to the interview if you think there is a chance it may come up. Do not say "yes" just to get the job if the real answer is "no". This can create a lot of problems later on in your career. Be honest at this point and save yourself future grief.
                        </p>
                        <br />
                        <h1 className='text-lg text-blue-500 font-bold'>20.What have you learned from mistakes on the job?
                        </h1>
                        <p className='ml-5'>Here you have to come up with something or you strain credibility. Make it small, well intentioned mistake with a positive lesson learned. An example would be "working too far ahead of colleagues on a project and thus throwing coordination off".
                        </p>
                        <br />
                    </div>
                </div>
            </div>
            <div className='mt-20 bg-orange-300 h-60 ml-16 rounded-xl p-3'>
                <div className='text-center'>
                    <h1 className='font-bold text-lg '>Blogs</h1>
                    <hr className='mt-2' />

                </div>
                <div className='mt-5'>
                    <div className='my-3 hover:text-blue-500'>
                        <Link to='/blog/interview '><li>Interview Tips</li></Link>
                    </div>
                    <div className='my-3 hover:text-blue-500'><Link to='/blog/resume'><li>Resume Building Tips</li></Link></div>
                    <div className='my-3 hover:text-blue-500'><Link to='/blog/coverletter'><li>Cover Letter Tips</li></Link></div>
                    <div className='mt-2 hover:text-blue-500'>
                        <Link to='/blog/Article'><li>Articles</li></Link>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Blogs;