import JobItem from "./JobItem";
const SimilarJobs = ({ similarJobsInfo }) => {
  console.log(similarJobsInfo);
  return (
    <div>
      <h3 className="text-md font-semibold my-4">Similar Jobs</h3>
      <ul className="flex flex-col md:flex-row items-center justify-between gap-x-2 gap-y-4">
        {similarJobsInfo.map((eachJob) => (
          <JobItem key={eachJob.id} job={eachJob} />
        ))}
      </ul>
    </div>
  );
};

export default SimilarJobs;
