const TypeOfEmployment = ({ setJobType }) => {
  return (
    <>
      <h3 className="text-sm md:text-md font-semibold my-4 ">
        Type of Employment
      </h3>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="fullTime"
          className="h-3 w-3 cursor-pointer"
          onChange={() => setJobType("FULLTIME")}
        />
        <label className="ml-2 text-gray-600 text-sm" htmlFor="fullTime">
          Full Time
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="partTime"
          className="h-3 w-3 cursor-pointer"
          onChange={() => setJobType("PARTTIME")}
        />
        <label className="ml-2 text-gray-600 text-sm" htmlFor="partTime">
          Part Time
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="internship"
          className="h-3 w-3 cursor-pointer"
          onChange={() => setJobType("INTERNSHIP")}
        />
        <label className="ml-2 text-gray-600 text-sm" htmlFor="internship">
          Internship
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="freelance"
          className="h-3 w-3 cursor-pointer"
          onChange={() => setJobType("FREELANCE")}
        />
        <label className="ml-2 text-gray-600 text-sm" htmlFor="freelance">
          Freelance
        </label>
      </div>
    </>
  );
};

export default TypeOfEmployment;
