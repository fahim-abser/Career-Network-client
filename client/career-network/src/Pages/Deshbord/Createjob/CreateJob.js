import React from "react";
import { useForm } from "react-hook-form";

const CreateJob = () => {
  const handleCreateJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.title.value;
    const city = form.city.value;
    const location = form.location.value;
    const salary = form.salary.value;
    const skills = form.skills.value;
    const category = form.category.value;
    const jobSummary = form.jobSummary.value;
    const description = form.description.value;
    const jobType = form.jobType.value;
    const experience = form.experience.value;
    const postDate = form.date.value;
    const postInfo = {
      jobTitle,
      city,
      location,
      salary,
      skills,
      category,
      jobSummary,
      description,
      jobType,
      experience,
      postDate,
    };
    console.log(postInfo);
  };

  return (
    <div className="lg:shadow-md p-4 m-10">
      <h1 className="text-center text-purple-800 text-2xl font-bold mt-5 mb-5">
        Post A Job
      </h1>
      <div className="  lg:ml-[410px]  m-4  ">
        <div>
          <form onSubmit={handleCreateJob}>
            {/* title */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="  Job Title"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>
            {/* City */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Salary */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Salary
                  </label>
                  <input
                    type="text"
                    name="salary"
                    id="fName"
                    placeholder="Salary"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            {/* Job skills */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Job Skills
                  </label>
                  <input
                    type="text"
                    name="skills"
                    placeholder="Job Skills"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Job Category */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Job Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Job Category"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Job Summary */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Job Summary
                  </label>
                  <textarea
                    name="jobSummary"
                    placeholder="Write here.."
                    className="w-full h-20 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Job description */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Job Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Write here..."
                    className="w-full  p-2 h-24 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Job Type selected */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Job Type
                  </label>
                  <input
                    type="text"
                    name="jobType"
                    placeholder=" Job Type"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>
            {/* Experienced Required */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Experience Required
                  </label>
                  <input
                    type="text"
                    name="experience"
                    placeholder=" Experience Required"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
            </div>
            {/*Posting Date */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Posting Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div>
              
              {/* The button to open modal */}
              <label htmlFor="my-modal-3" className="hover:shadow-form rounded-md bg-green-700 py-3 px-6 text-center text-base font-semibold text-white outline-none">Create Job</label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                  <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                  <button className="hover:shadow-form rounded-md bg-green-700 py-3 px-6 text-center text-base font-semibold text-white outline-none">
                Create Job
              </button>
                </div>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
