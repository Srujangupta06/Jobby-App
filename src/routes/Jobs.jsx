import { useEffect, useState } from "react";
import Header from "../components/Header";
import Cookies from "js-cookie";
import JobItem from "../components/JobItem";
import { ThreeDots } from "react-loader-spinner";
const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const jwtToken = Cookies.get("jwtToken");

  const onHandleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onHandlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const fetchJobs = async () => {
    try {
      const apiUrl = "https://apis.ccbp.in/jobs";
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.ok) {
        const updatedData =
          data.jobs?.map((eachJobInfo) => ({
            id: eachJobInfo.id,
            title: eachJobInfo.title,
            companyLogoUrl: eachJobInfo.company_logo_url,
            employmentType: eachJobInfo.employment_type,
            jobDescription: eachJobInfo.job_description,
            packagePerAnnum: eachJobInfo.package_per_annum,
            rating: eachJobInfo.rating,
            location: eachJobInfo.location,
          })) || [];
        setJobsData(updatedData);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (jwtToken) {
      fetchJobs();
    }
  }, [jwtToken]);

  const itemsPerPage = 12;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(jobsData.length / itemsPerPage);

  const renderJobs = () => (
    <div className="px-6 md:px-24 py-2">
      {/*Right Side */}
      <ul className="flex flex-wrap gap-8 pt-12 items-center">
        {jobsData.slice(startIndex, endIndex).map((eachJob) => (
          <JobItem key={eachJob.id} job={eachJob} />
        ))}
      </ul>
      {/*Pagination */}
      <div className="flex items-center justify-end gap-x-5 my-8">
        <button
          onClick={onHandlePreviousPage}
          className="cursor-pointer text-[14px] bg-white px-2 py-1 rounded-sm text-blue-500 border border-blue-500 tracking-wide"
        >
          Prev
        </button>
        <div className="h-6 w-6 rounded-sm border flex flex-col items-center justify-center">
          <p className="font-semibold text-sm">{currentPage + 1}</p>
        </div>
        <button
          onClick={() => onHandleNextPage(itemsPerPage)}
          className="cursor-pointer text-[14px] bg-white px-2 py-1 rounded-sm text-blue-500 border border-blue-500 tracking-wide"
        >
          Next
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      {jobsData.length === 0 ? (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            radius="9"
            ariaLabel="three-dots-loading"
            color="#3B82F6"
          />
        </div>
      ) : (
        renderJobs()
      )}
    </>
  );
};

export default Jobs;
