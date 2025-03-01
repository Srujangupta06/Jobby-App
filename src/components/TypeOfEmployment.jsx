const TypeOfEmployment = ({ jobType, setJobType }) => {
  const handleCheckboxChange = (type) => {
    setJobType(
      (prev) =>
        prev.includes(type)
          ? prev.filter((item) => item !== type) // Remove if already selected
          : [...prev, type] // Add if not selected
    );
  };

  return (
    <>
      <h3 className="text-sm md:text-md font-semibold my-4">
        Type of Employment
      </h3>

      {["FULLTIME", "PARTTIME", "INTERNSHIP", "FREELANCE"].map((type) => (
        <div className="flex items-center mb-2" key={type}>
          <input
            type="checkbox"
            id={type.toLowerCase()}
            className="h-3 w-3 cursor-pointer"
            checked={jobType.includes(type)}
            onChange={() => handleCheckboxChange(type)}
          />
          <label
            className="ml-2 text-gray-600 text-sm"
            htmlFor={type.toLowerCase()}
          >
            {type.charAt(0) + type.slice(1).toLowerCase().replace("_", " ")}
          </label>
        </div>
      ))}
    </>
  );
};

export default TypeOfEmployment;
