import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../components/Header";
import { IoIosStar } from "react-icons/io";
import { FaLocationDot, FaSuitcase } from "react-icons/fa6";
import SkillItem from "../components/skillItem";
import SimilarJobs from "../components/SimilarJobs";
import { ThreeDots } from "react-loader-spinner";
const SpecificJobDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [jobInfo, setJobInfo] = useState({});
  const [similarJobs, setSimilarJobs] = useState([]);
  const fetchJobInfo = async () => {
    setIsLoading(true);
    const token = Cookies.get("jwtToken");
    try {
      const apiUrl = `https://apis.ccbp.in/jobs/${id}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        const data = await response.json();
        const updatedJobDetails = {
          id: data.job_details.id,
          title: data.job_details.title,
          description: data.job_details.job_description,
          companyLogoUrl: data.job_details.company_logo_url,
          employmentType: data.job_details.employment_type,
          location: data.job_details.location,
          packagePerAnnum: data.job_details.package_per_annum,
          rating: data.job_details.rating,
          skills: data.job_details.skills.map((eachSkill) => {
            return {
              name: eachSkill.name,
              imageUrl: eachSkill.image_url,
            };
          }),
          companyWebsiteUrl: data.job_details.company_website_url,
        };
        const updatedSimilarJobs = data.similar_jobs?.map((eachJob) => {
          return {
            id: eachJob.id,
            title: eachJob.title,
            companyLogoUrl: eachJob.company_logo_url,
            description: eachJob.job_description,
            employmentType: eachJob.employment_type,
            location: eachJob.location,
            packagePerAnnum: eachJob.package_per_annum,
            rating: eachJob.rating,
          };
        });
        setJobInfo(updatedJobDetails);
        setSimilarJobs(updatedSimilarJobs);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchJobInfo();
  }, [id]);

  const renderJobInfo = () => (
    <div className="px-6 md:px-24 pt-4 pb-6 relative top-10 flex flex-col items-center">
      <div className=" bg-gray-100 my-8 py-4 px-4 shadow-lg rounded-md w-[100%]">
        <div className="flex items-start gap-x-4">
          <img src={companyLogoUrl} alt="company logo" className="h-16 w-16" />
          <div>
            <h2 className="font-semibold text-lg">{title}</h2>
            <div className="flex items-center gap-1">
              <span className="text-gray-700 font-medium">{rating}</span>
              <IoIosStar className="text-amber-400 text-lg" />
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-3" />
        <div className="flex justify-between items-center text-gray-700">
          <div className="flex items-center gap-4">
            {/* Location */}
            <div className="flex items-center gap-1">
              <FaLocationDot className="text-gray-500 text-lg" />
              <span className="text-sm font-medium">{location}</span>
            </div>

            {/* Employment Type */}
            <div className="flex items-center gap-1">
              <FaSuitcase className="text-gray-500 text-lg" />
              <span className="text-sm font-medium">{employmentType}</span>
            </div>
          </div>
          <h2 className="font-semibold text-gray-900 text-lg">
            {packagePerAnnum}
          </h2>
        </div>
        <h3 className="text-md font-semibold my-4">Job Description</h3>
        <ul className="px-4 list-disc">
          {description?.split(".").map((eachLine, index) => {
            if (eachLine !== "") {
              return (
                <li key={index} className="text-gray-600 text-sm mb-2">
                  {eachLine}
                </li>
              );
            }
          })}
        </ul>
        <h3 className="text-md font-semibold my-4">Required Skills</h3>
        <ul className="flex items-center gap-x-10 flex-wrap gap-y-2">
          {skills?.map((eachSkill, index) => (
            <SkillItem key={index} skillInfo={eachSkill} />
          ))}
        </ul>
      </div>

      {/*Similar Jobs */}
      {/* <SimilarJobs similarJobsInfo={similarJobs} /> */}
    </div>
  );

  const renderLoadingView = () => (
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
  );
  const {
    companyLogoUrl,
    title,
    rating,
    location,
    employmentType,
    packagePerAnnum,
    description,
    skills,
  } = jobInfo;
  return (
    <>
      <Header />
      {isLoading ? renderLoadingView() : renderJobInfo()}
    </>
  );
};

export default SpecificJobDetails;
