import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onHandlePasswordPrivacy = () => {
    setShowPassword(!showPassword);
  };

  const getLoginStatus = async (userInfo) => {
    setLoading(true);
    try {
      const apiUrl = "https://apis.ccbp.in/login";
      const options = {
        method: "POST",
        body: JSON.stringify(userInfo),
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();

      if (response.ok) {
        // Cookie expires for every 1 day
        Cookies.set("jwtToken", data.jwt_token, { expires: 1 });
        setLoading(false);
        navigate("/");
      } else {
        setErrMsg(data.error_msg);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onHandleFormSubmit = (e) => {
    e.preventDefault();
    const userCredentials = {
      username: userName,
      password: userPassword,
    };
    setErrMsg("");
    getLoginStatus(userCredentials);
  };

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  return (
    <div className="flex bg-gray-100 items-center justify-center min-h-screen p-4">
      {/* Login Container */}
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1740660612/login-page-image_vinxph.png"
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Welcome To <span className="text-blue-500">Jobby</span>
          </h2>

          <form className="space-y-6" onSubmit={onHandleFormSubmit}>
            {/* Username Field */}
            <div>
              <label className="block text-gray-700 font-medium">
                Username
              </label>
              <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                <FaUser className="text-gray-500 mr-3" />
                <input
                  onChange={onChangeUserName}
                  type="text"
                  placeholder="Enter your username"
                  value={userName}
                  className="w-full outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  onChange={onChangeUserPassword}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={userPassword}
                  className="w-full outline-none bg-transparent text-gray-700"
                />
                {showPassword === false ? (
                  <IoEyeOffOutline
                    className="text-xl text-gray-700 cursor-pointer"
                    onClick={onHandlePasswordPrivacy}
                  />
                ) : (
                  <IoEyeOutline
                    className="text-xl text-gray-700 cursor-pointer"
                    onClick={onHandlePasswordPrivacy}
                  />
                )}
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full flex justify-center bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-medium py-2 rounded-lg transition duration-300 shadow-md"
            >
              {isLoading && !errMsg ? (
                <Oval
                  visible={true}
                  height="20"
                  width="20"
                  color="#ffffff"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                "Login"
              )}
            </button>
            {errMsg !== "" ? (
              <span className="text-red-600">{errMsg}</span>
            ) : (
              ""
            )}
            {/* Extra Links */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
