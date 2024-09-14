"use client";

import { useState } from "react";
import SpotifyLogo from "@/public/images/spotify.svg"; // Correct import path for Spotify logo
import GoogleLogo from "@/public/images/google-24.svg"; // Correct import path for Google logo

import { GoogleOauthButton } from "@/router/login/_components/serverComponents";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center right- bg-white min-h-screen font-bold">
      <h1 className="text-2xl font-bold mb-6 mt-3">Spotify에 로그인하기</h1>

      <GoogleOauthButton />

      {/* Divider */}
      <div className="w-80 border-t border-gray-300 mb-6"></div>

      {/* Email Input */}
      <div className="w-80 mb-4 text-left">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          이메일
        </label>
        <input
          type="email"
          id="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />
      </div>

      {/* Password Input */}
      <div className="w-80 mb-6  text-left">
        <label className="block text-sm font-bold mb-2" htmlFor="password">
          비밀번호
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            {/* Show/hide password icon */}
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.824-.678 1.59-1.189 2.272M15 12a3 3 0 01-6 0m6 0a3 3 0 00-3-3m3 3a3 3 0 01-3 3m-4.35 2.924A10.97 10.97 0 0112 21c4.477 0 8.268-2.943 9.542-7-.274-.824-.678-1.59-1.189-2.272"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825c1.956.284 3.987.134 5.825-.537M6.122 17.462A9.965 9.965 0 012.875 12c0-2.488.903-4.752 2.396-6.525M15.6 4.35A9.965 9.965 0 0121.125 12c0 2.488-.903 4.752-2.396 6.525M9.375 5.175C7.604 5.906 5.87 6.518 4.125 6.987m11.4 11.1a12.017 12.017 0 01-10.425-6.012M21 21L3 3"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Login Button */}
      <button className="w-80 p-3 text-white bg-purple-AC25FF rounded-full font-bold mb-4">
        로그인하기
      </button>

      {/* Forgot Password Link */}
      <a href="#" className="text-sm text-gray-600">
        비밀번호를 잊었나요?
      </a>
    </div>
  );
}
