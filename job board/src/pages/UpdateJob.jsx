import { useLoaderData, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

function UpdateJob() {
    const [selectedOption, setSelectedOption] = useState(null);
  const { id } = useParams();
  // console.log(id)
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLoaction,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills,
  } = useLoaderData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    // console.log(data);
    fetch(`http://localhost:3000/update-job/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("job upadted successfully :)");
        }
        reset();
      });
  };

  const options = [
    { value: "javaScript", label: "javaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "ReactJs", label: "ReactJs" },
    { value: "Node", label: "Node" },
  ];

  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* from */}
      <div className="bg-[#FAFAFA] py-10x-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-x-5">
          {/* this is first row */}
          <div className="create-job-flex ">
            <div className=" lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className=" lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className=" create-job-input"
              />
            </div>
          </div>

          {/* second row  */}
          <div className=" create-job-flex">
            <div className=" lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className=" lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg"> Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className=" create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value={salaryType}>{salaryType}</option>
                <option value="">Hourly</option>
                <option value="">Mounthly</option>
                <option value="">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New York"
                defaultValue={jobLoaction}
                {...register("jobLocation")}
                className="create-job-input "
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2023-10-28"
                defaultValue={postingDate}
                {...register("postingDate")}
                className="create-job-input "
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg">Experience Level</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="NoExperience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label className=" block mb-2 text-lg">Required skill sets</label>
            <CreatableSelect
              defaultValue={skills}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                defaultValue={companyLogo}
                placeholder="Paste your compony logo URL: https://weshare.com/img1"
                {...register("companyLogo")}
                className="create-job-input "
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className=" block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full time</option>
                <option value="Part-time">Part time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>
          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Descriptions</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none "
              rows={6}
              placeholder="Job Descriptions"
              defaultValue={description}
              {...register("description")}
            ></textarea>
          </div>
          {/* last row */}
          <div className="w-full">
            <label className=" block mb-2 text-lg ">Job Posted By</label>
            <input
              type="email"
              placeholder="your email"
              defaultValue={postedBy}
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold rounded-sm cursor-pointer px-8"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdateJob;
