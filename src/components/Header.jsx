import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Header = () => {
  const navigate = useNavigate();
  const onHandleLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/login");
  };
  return (
    <header className="bg-blue-500 py-3 px-6 md:px-28 flex items-center justify-between shadow-lg shadow-gray-300">
      <h1 className="text-white text-2xl font-semibold header-logo">Jobby</h1>
      <nav className="flex items-center gap-x-2 md:gap-x-10">
        <li className="list-none text-white">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="list-none text-white">
          <NavLink to="/explore-jobs">Jobs</NavLink>
        </li>
      </nav>
      <button
        className="bg-white text-blue-500 px-3 py-1 rounded-sm"
        onClick={onHandleLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
