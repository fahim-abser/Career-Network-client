import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';


const RProfile = () => {

    const { user } = useContext(AuthContext)
    const date = new Date().toLocaleDateString('en-GB')
    const navigate = useNavigate()
    const handleCreateProfile = (e) => {
        e.preventDefault();
        const formData = new FormData()
        const form = e.target;
        const companyName = form.companyName.value;
        const country = form.country.value;
        const number = form.number.value;
        const adress = form.adress.value;
        const description = form.description.value;
        const imagedata = e.target.image.files[0]
        formData.append("image", imagedata)
        console.log(country, companyName, number, adress, description, imagedata)
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
                        companyName,
                        country,
                        number: number,
                        adress,
                        description,
                        recruiterEmail: user?.email
                    };
                    console.log(postInfo)
                    const url = `http://localhost:5000/rprofile?email=${user?.email}`
                    fetch(url, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postInfo)
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Success:', data);
                            toast.success('profile updated successfully')
                            navigate(``)

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
        <div className="lg:shadow-md  mb-10 lg:w-8/12 md:w-10/12 w-full px-16 py-10 mx-auto">
            <h1 className="text-center text-purple-800 text-4xl font-bold font-besicFont mb-8">
                Edit Your Profile
            </h1>
            <div className="">
                <form onSubmit={handleCreateProfile}>
                    <div className="flex md:flex-row flex-col gap-6 justify-center items-center ">
                        <div className="w-full">
                            <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Company Name"
                                className="InputData"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 md:flex-row flex-col justify-center items-center my-3">
                        {/* Location */}
                        <div className="w-full">
                            <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                                Country
                            </label>
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                className="InputData"
                                required
                            />
                        </div>
                        {/* Salary */}
                        <div className="w-full">
                            <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                                Number
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="fName"
                                placeholder="Phone Number"
                                className="InputData"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 md:flex-row flex-col jsutify-center items-center my-3 ">
                        {/* Adress Required */}
                        <div className="w-full">
                            <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                                Adress
                            </label>
                            <input
                                type="text"
                                name="adress"
                                placeholder=" Adress Required"
                                className="InputData"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                                set image
                            </label>
                            <input
                                type="file"
                                name="image"
                                placeholder="Job Skills"
                                className="InputData w-full h-full ml-0 pl-0"
                                required
                            />
                        </div>
                    </div>
                    {/* Company description */}
                    <div className="w-full my-3">
                        <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                            Company Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Write here..."
                            className="w-full border-2  p-2 h-24 rounded-md focus:outlet-none dark:border-gray-700 dark:text-gray-900"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button className="hover:shadow-form rounded-md bg-green-700 py-3 px-6 text-center text-base font-semibold text-white outline-none">
                            Create Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RProfile;