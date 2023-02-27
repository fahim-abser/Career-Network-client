import React from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const CreateProfile = () => {
    const navigate = useNavigate()
    const handleCreateProfile = (e) => {
        e.preventDefault();
        const formData = new FormData()
        const form = e.target;
        const name = form.name.value;
        const profession = form.profession.value
        const email = form.email.value
        const phone = form.phone.value
        const linkedin = form.linkedin.value
        const github = form.github.value
        const portfolio = form.portfolio.value
        const location = form.location.value;
        const about = form.about.value;
        const skills = form.skills.value;


        

        const imagedata = e.target.image.files[0]
        formData.append("image", imagedata)
        console.log(formData)
        //  imgbb api 
        fetch('https://api.imgbb.com/1/upload?key=d1f3d96d8051fdcb90609fd80a5c336d', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    const postInfo = {
                        image: data?.data?.url,
                        name,
                        profession,
                        email,
                        phone,
                        linkedin,
                        github,
                        portfolio,
                        location,
                        about,
                        skills
 };
 console.log(postInfo)
                    const url = `http://localhost:5000/candidateprofile`
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postInfo)
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                            toast.success('profile created successfully')
                            navigate('/employedashboard')

                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                };
            })
            .catch((err) => {
                console.log(err)
            })
    };
    return (



        <section className="p-6 bg-white text-gray-50">
            <form onSubmit={handleCreateProfile} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#1E293B]">

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="username" className="text-sm">Username</label>
                            <input id="name" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Profession</label>
                            <input id="profession" type="text" placeholder="Profession" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Location</label>
                            <input id="location" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Phone</label>
                            <input id="phone" type="number" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Linkedin</label>
                            <input id="linkedin" type="text" placeholder="https:/" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Github</label>
                            <input id="github" type="text" placeholder="https:/" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="website" className="text-sm">Portfolio Link</label>
                            <input id="portfolio" type="text" placeholder="https:/" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">Skills</label>
                            <textarea id="skills" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"></textarea>
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">Bio</label>
                            <textarea id="about" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"></textarea>
                        </div>
                        <div className="col-span-full">
                            <label for="bio" className="text-sm">Photo</label>
                            <div className="flex items-center space-x-2">

                                <div className="w-full">
                                    <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                                        set image
                                    </label>
                                    <input
                                        type="file"
                                        name="image"
                                        placeholder="Job Skills"
                                        className="InputData w-1/4 h-full ml-0 pl-0"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <button type='submit' className='btn btn-success mt-8'>Create</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default CreateProfile;