import JobItem from "./JobItem";
const SimilarJobs = ({ similarJobsInfo }) => {

  return (
    <div>
      <h3 className="text-md font-semibold my-4">Similar Jobs</h3>
      <ul className="flex items-center justify-between">
        {similarJobsInfo.map((eachJob) => (
          <JobItem key={eachJob.id} job={eachJob} />
        ))}
      </ul>
    </div>
  );
};

export default SimilarJobs;
