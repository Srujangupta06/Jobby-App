import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:px-28 px-6 py-8 relative top-30 md:top-10">
        <div className="md:w-1/2 flex flex-col items-start">
          <h1 className="text-3xl font-semibold text-blue-500 md:mb-4 mb-2">
            Find The Job That Fits Your Life
          </h1>
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1740664191/home-page-image-jobby_xwq7yy.png"
            alt="home-page-main-page"
            className="md:hidden w-[90%]"
          />
          <p className="text-gray-500 leading-loose md:mb-4 mb-2">
            Millions of people are searching for jobs,salary information,
            company reviews. Find the jobs that fits your ability and potential
          </p>
          <button
            onClick={() => navigate("/explore-jobs")}
            className="bg-blue-500 border-none outline-none text-white cursor-pointer px-4 py-1 text-md rounded-sm"
          >
            Find Jobs
          </button>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1740664191/home-page-image-jobby_xwq7yy.png"
            alt="home-page-main-page"
            className="hidden md:block w-[85%]"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
