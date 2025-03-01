import SalaryRange from "./SalaryRange";
import TypeOfEmployment from "./TypeOfEmployment";

const Filters = ({ setSalary, setJobType, jobType }) => {
  return (
    <div className="w-full md:w-[40%]  py-2 px-2 md:fixed md:top-20 mt-16 md:mt-0">
      <TypeOfEmployment setJobType={setJobType} jobType={jobType} />
      <hr className="border-gray-300 my-3 w-1/2" />
      <SalaryRange setSalary={setSalary} />
    </div>
  );
};

export default Filters;
