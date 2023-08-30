import { Link } from "react-router-dom";
import { Images } from "../utils/images";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";

const Login = () => {
  const [more, setMore] = useState(false);
  const [isForm, setIsForm] = useState(true);
  const handleLearnMore = () => {
    setMore(true);
  };
  const handleSignInForm = () => {
    setIsForm(!isForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img src={Images.bglogo} alt="bgLogo" className="h-screen w-full bg-cover overflow-clip"/>
      </div>
      <div className="h-screen w-auto grid place-items-center pt-24">
        <form className="flex flex-col relative bg-black rounded-md px-16 py-20 bg-opacity-80">
          <label className="font-semibold text-white px-2 text-4xl pb-4">
            {isForm ? "Sign In" : "Sign Up"}
          </label>
          {!isForm ? (
            <input
              type="text"
              placeholder="Full name"
              className="p-3 my-2 rounded-[4px] bg-[#333] text-white"
            />
          ) : (
            null
          )}
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-3 my-2 rounded-[4px] bg-[#333] text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 my-2 rounded-[4px] bg-[#333] text-white"
          />
          <Link
            to={"/browse"}
            className="bg-red-600 text-white mt-7 p-3 rounded-sm text-center"
          >
            {isForm ? "Sign In" : "Sign Up"}
          </Link>
          <div className="flex justify-between my-4">
            <div>
              <input className="w-4 h-4" checked={true} type="checkbox" />
              <label className="text-[#b3b3b3] font-normal ml-1 text-[13px]">
                Remember me
              </label>
            </div>
            <label className="text-[#b3b3b3] text-[13px] cursor-pointer hover:underline">
              Need help?
            </label>
          </div>
          <div className="flex py-2 mt-6">
            <label className="text-[#737373]">
              {isForm ? "New to Netflix?" : "Already member!"}
            </label>
            <span
              onClick={handleSignInForm}
              className="text-white ml-1 cursor-pointer"
            >
              {isForm ? "Sign up now" : "Sign In"}.
            </span>
          </div>
          <div>
            <p className="text-[#b3b3b3] w-80 text-xs py-2 text-[13px]">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              {!more ? (
                <span
                  onClick={handleLearnMore}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Learn more.
                </span>
              ) : null}
            </p>

            {more ? (
              <p className="text-[#b3b3b3] w-80 text-xs py-2 leading-4 text-[13px]">
                The information collected by Google reCAPTCHA is subject to the
                Google{" "}
                <span className="text-blue-500 cursor-pointer hover:underline">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-blue-500 cursor-pointer hover:underline">
                  Terms of Service
                </span>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalised advertising by Google).
              </p>
            ) : (
              <div className="py-14"></div>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
