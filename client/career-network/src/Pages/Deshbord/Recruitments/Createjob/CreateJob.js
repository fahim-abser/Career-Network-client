import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";

// d1f3d96d8051fdcb90609fd80a5c336d

const CreateJob = () => {
   const { user } = useContext(AuthContext)
   const date = new Date().toLocaleDateString('en-GB')
   const navigate = useNavigate()
   const handleCreateJob = (e) => {
      e.preventDefault();
      const formData = new FormData()
      const form = e.target;
      const jobTitle = form.title.value;
      const companyName = form.companyName.value;
      const location = form.location.value;
      const salary = form.salary.value;
      const skills = form.skills.value;
      const category = form.category.value;
      const jobSummary = form.jobSummary.value;
      const description = form.description.value;
      const jobType = form.jobType.value;
      const experience = form.experience.value;
      const postDate = date
      const deadline = form.dateline.value
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
                  job_title: jobTitle,
                  companyName,
                  location,
                  salary,
                  skills,
                  category_name: category,
                  jobSummary,
                  description,
                  duty_hours: jobType,
                  experience,
                  postDate,
                  deadline,
                  isPaid: false,
                  isVerify: false,
                  recruiterEmail: user?.email
               };

               const url = `http://localhost:5000/jobs`
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
                     toast.success('job posted successfully')
                     navigate(`/category/${category}`)

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
            Post A Job
         </h1>
         <div className="">
            <form onSubmit={handleCreateJob}>
               <div className="flex md:flex-row flex-col gap-6 justify-center items-center ">
                  {/* title */}
                  <div className="w-full ">
                     <label className=" ml-2 block font-besicFont font-bold text-[#07074D]">
                        Job Title
                     </label>
                     <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        className="InputData"
                        required
                     />
                  </div>
                  {/* City */}
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
                        Location
                     </label>
                     <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="InputData"
                        required
                     />
                  </div>
                  {/* Salary */}
                  <div className="w-full">
                     <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                        Salary
                     </label>
                     <input
                        type="text"
                        name="salary"
                        id="fName"
                        placeholder="Salary"
                        className="InputData"
                        required
                     />
                  </div>
               </div>
               <div className="flex md:flex-row flex-col gap-6 justify-center items-center">
                  {/* Job skills */}
                  <div className="w-full">
                     <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                        deadline
                     </label>
                     <input
                        type="date"
                        name="dateline"
                        placeholder="Job Skills"
                        className="InputData"
                        required
                     />
                  </div>
                  {/* Job Category */}
                  <div className="w-full">
                     <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                        Job Category
                     </label>
                     <select
                        name="category"
                        className=" InputData"
                     >

                        <option defaultValue="Choose a category">Choose a category</option>
                        <option defaultValue="Designer">Designer</option>
                        <option defaultValue="Web Developer">Web Developer</option>
                        <option defaultValue="Marketing">Marketing</option>
                        <option defaultValue="Education">Education</option>
                        <option defaultValue="Writing And Editing">
                           Writing And Editing
                        </option>
                        <option value="Sales">Sales</option>

                     </select>
                  </div>
               </div>
               <div className="flex gap-6 md:flex-row flex-col jsutify-center items-center my-3">
                  {/* Job Type selected */}
                  <div className="w-full">
                     <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                        Job Type
                     </label>
                     <input
                        type="text"
                        name="jobType"
                        placeholder=" Job Type"
                        className="InputData"
                        required
                     />
                  </div>
                  {/* Experienced Required */}
                  <div className="w-full">
                     <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                        Experience Required
                     </label>
                     <input
                        type="text"
                        name="experience"
                        placeholder=" Experience Required"
                        className="InputData"
                        required
                     />
                  </div>
               </div>
               <div className="flex gap-6 md:flex-row flex-col jsutify-center items-center my-3 ">
                  <div className="w-full">
                     <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                        Job Skills
                     </label>
                     <input
                        type="text"
                        name="skills"
                        placeholder="Job Skills"
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
               {/* Job Summary */}
               <div className="w-full">
                  <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                     Job Summary
                  </label>
                  <textarea
                     name="jobSummary"
                     placeholder="Write here.."
                     className="w-full border-2 h-20 rounded-md focus:outlet-none focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                     required
                  ></textarea>
               </div>
               {/* Job description */}
               <div className="w-full my-3">
                  <label className="ml-2 block font-besicFont font-bold text-[#07074D]">
                     Job Description
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

export default CreateJob;
