const SalaryRange = ({ setSalary, salary }) => {
  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  return (
    <>
      <h3 className="text-sm md:text-md font-semibold my-4">Salary Range</h3>
      {["10", "20", "30", "40"].map((amount) => (
        <div key={amount} className="mb-2">
          <input
            type="radio"
            id={`${amount}AndAbove`}
            className="h-3 w-3 cursor-pointer mr-2"
            name="salary-range"
            value={amount}  // Ensure this value is correctly set
            checked={salary === amount}  // Controls the selected radio
            onChange={handleSalaryChange} // Updates state on selection
          />
          <label htmlFor={`${amount}AndAbove`} className="text-gray-600 text-sm">
            ₹ {amount} LPA and above
          </label>
        </div>
      ))}
    </>
  );
};

export default SalaryRange;
