const SalaryRange = () => {
  return (
    <>
      <h3 className="text-sm md:text-md font-semibold my-4">Salary Range</h3>
      <div className=" mb-2">
        <input
          type="radio"
          id="10AndAbove"
          className="h-3 w-3 cursor-pointer mr-2"
          name="salary-range"
        />
        <label htmlFor="10AndAbove" className="text-gray-600 text-sm">
        ₹ 10 LPA and above
        </label>
      </div>
      <div className=" mb-2">
        <input
          type="radio"
          id="20AndAbove"
          className="h-3 w-3 cursor-pointer mr-2"
          name="salary-range"
        />
        <label htmlFor="20AndAbove" className="text-gray-600 text-sm">
        ₹ 20 LPA and above
        </label>
      </div>
      <div className=" mb-2">
        <input
          type="radio"
          id="30AndAbove"
          className="h-3 w-3 cursor-pointer mr-2"
          name="salary-range"
        />
        <label htmlFor="30AndAbove" className="text-gray-600 text-sm">
        ₹ 30 LPA and above
        </label>
      </div>
      <div className=" mb-2">
        <input
          type="radio"
          id="40AndAbove"
          className="h-3 w-3 cursor-pointer mr-2"
          name="salary-range"
        />
        <label htmlFor="40AndAbove" className="text-gray-600 text-sm">
        ₹ 40 LPA and above
        </label>
      </div>
    </>
  );
};

export default SalaryRange;
