// page.tsx
"use client";

import { useState } from "react";

import GoogleIcon from "../../../public/icons/google-24.svg"; // Correct import path
import SpotifyLogo from "../../../public/icons/spotify.svg"; // Correct import path

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setError("This field is required.");
    } else if (!email.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      // Handle form submission
      setError("");
    }
  };

  return (
    <div className="flex flex-col items-center max-w-xl mx-auto text-center p-16 right- bg-white min-h-screen font-pretendard font-bold">
      <SpotifyLogo className="mb-4" alt="Spotify Logo" />
      <h1 className="text-black text-center font-bold text-[50px] leading-[60px] tracking-[-1.6px] mb-6 font-Pretendard ">
        가입하고
        <br />
        원하는 음악을
        <br />
        감상하세요
      </h1>

      <div className="w-full text-left mt-14">
        <p className="mb-2 font-bold text-sm ">이메일 주소</p>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-3 mb-3 ${error ? "mb-1 border-red-500" : "mb-4 border-gray-400"} border rounded font-normal font-pretendard`}
        />
        {error && <p className="text-red-500 text-xs mb-1">{error}</p>}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full p-3 mb-4 bg-custom-purple text-white rounded-full hover:bg-[#ac44ff] font-normal "
      >
        다음
      </button>
      <div className="w-full flex items-center my-4">
        <hr className="flex-grow border-t border-gray-D9DADC" />
        <span className="px-2 text-black font-bold text-sm">또는</span>
        <hr className="flex-grow border-t border-gray-D9DADC" />
      </div>
      <button className="w-full p-3 mb-4 flex items-center justify-center border border-gray-878787 rounded-full hover:border-black">
        <GoogleIcon className="w-5 h-4 mr-2" alt="Google Icon" />
        <span className="font-normal text-gray-700">Continue with Google</span>
      </button>
      <p className="text-black mt-4 font-normal text-sm flex items-center">
        <span>이미 계정이 있나요?</span>
        <a href="#" className="text-black underline font-bold ml-1">
          여기에서 로그인하세요
        </a>
      </p>
    </div>
  );
}
