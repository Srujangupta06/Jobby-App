import { IoIosStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";
import LazyLoad from "react-lazyload";
const JobItem = ({ job }) => {
  const {
    title,
    rating,
    companyLogoUrl,
    location,
    employmentType,
    packagePerAnnum,
  } = job;
  return (
    
      <li className="border border-gray-300 shadow-lg rounded-lg px-6 py-4 w-[95%] md:w-[31%] bg-white transition-transform hover:scale-105 hover:shadow-2xl">
        <div className="flex items-start justify-between">
          {/* Left Section */}
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <div className="flex items-center gap-1">
              <IoIosStar className="text-amber-400 text-lg" />
              <span className="text-gray-700 font-medium">{rating}</span>
            </div>
          </div>

          {/* Company Logo */}
          <img
            src={companyLogoUrl}
            alt={title}
            className="h-12 w-12 rounded-full shadow-md"
          />
        </div>

        <hr className="border-gray-300 my-3" />

        {/* Job Details */}
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

        {/* Buttons */}
        <div className="flex items-end justify-between mt-4">
          <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 transition-all text-white px-5 py-2 text-[16px] rounded-lg font-medium shadow-md">
            Apply Now
          </button>
          <a className="text-blue-500 text-[14px] hover:text-blue-600 underline text-sm cursor-pointer transition-all">
            Know More
          </a>
        </div>
      </li>
  );
};

export default JobItem;
