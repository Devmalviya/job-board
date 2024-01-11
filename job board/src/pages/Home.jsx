import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Jobs from "./Jobs";
import Card from "../components/Card";
import Sidebar from "./Sidebar/Sidebar";
import Newsletter from "../components/Newsletter";
function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  useEffect(() => {
    fetch("http://localhost:3000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  });

  // handle input change
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filter jobs by title
  const filteredItem = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // raido filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //button base filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // calculate the index range

  const calculatepageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // function for a next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItem.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // function for previous page

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //main fuction
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredItem;
    }

    // category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase()
      );
    }
    // slice the data based on current page
    const { startIndex, endIndex } = calculatepageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* //  main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px34 px-4 py-12  ">
        {/* left side */}
        <div className="ring-1 ring-inset  focus-within:ring-blue p-4 rounded ">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Job cart  */}
          <div className=" col-span-2 bg-white p-4 rounded-sm ">
            {isLoading ? (
              <p className="font-medium">Loading...</p>
            ) : result.length > 0 ? (
              <Jobs result={result} />
            ) : (
              <>
                <h3 className="text-lg font-bold mb-3">{result.length}</h3>
                <p>No Data Found :\</p>
              </>
            )}

            {/* / define pagination hear  */}

            {result.length > 0 ? (
              <div className="flex justify-center mt-4 space-x-8">
                <button className="hover:underline" onClick={prevPage}>
                  previous
                </button>
                <span className="mx-2">
                  page {currentPage} of{" "}
                  {Math.ceil(filteredItem.length / itemsPerPage)}
                </span>
                <button
                  className="hover:underline"
                  onClick={nextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(filteredItem.length / itemsPerPage)
                  }
                >
                  Next
                </button>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Rightside  */}
          <div className="bg-white p-4 rounded ">
            <Newsletter />
          </div>
        </div>
    </div>
  );
}

export default Home;
