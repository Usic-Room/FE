"use client";

import { useState, useEffect } from "react";
import SpotifyLogo from "@/public/icons/spotify.svg"; // Correct import path
import {
  SubmitButton,
  ProgessBarAndSections,
} from "@/app/(router)/register/password/_components/serverComponents";
import ChevronLeft from "@/public/icons/chevron-left.svg"; // Correct import path

export default function RegisterPassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    length: true,
    uppercase: true,
    specialChar: true,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const isLengthValid = password.length >= 10;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    setError({
      length: !isLengthValid,
      uppercase: !hasUppercase,
      specialChar: !hasSpecialChar,
    });
  }, [password]);

  const handleSubmit = () => {
    setSubmitted(true);
    if (!error.length && !error.uppercase && !error.specialChar) {
      // Handle successful form submission
      console.log("Form submitted successfully.");
    } else {
      console.log("Form submission failed due to unmet criteria.");
    }
  };

  const getErrorIcon = (conditionMet) => {
    return (
      <span
        className={`inline-block w-5 h-5 rounded-full flex items-center justify-center ${
          conditionMet
            ? "bg-green-500 text-white"
            : "bg-transparent border border-gray-400"
        }`}
      >
        {conditionMet && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      {/* Progress Bar and Sections */}

      <div className="w-full mt-4 mb-8">
        <div className="flex flex-col items-start">
          <ProgessBarAndSections />
          <div className="flex items-center mt-4">
            {/* Left Arrow Section */}
            <button className="text-black mr-2">
              <ChevronLeft className="w-7 h-7" alt="Back Arrow" />
            </button>
            <div>
              <p className="text-lg text-gray-600">1/3단계</p>
              <h1 className="text-xl font-bold">비밀번호를 만드세요.</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Password Input Section */}
      <div className="w-96 text-left mb-4">
        <p className="mb-2 font-bold text-sm">비밀번호</p>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className={`w-full border ${
              submitted &&
              (error.length || error.uppercase || error.specialChar)
                ? "border-red-500"
                : "border-gray-300"
            } p-4 rounded`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center"
            style={{ top: "50%", transform: "translateY(-50%)" }} // Center vertically
          >
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

      {/* Password Criteria Section */}
      <div className="w-96 text-left mb-8">
        <p className="text-sm mb-2 font-bold">
          비밀번호에는 다음 문자가 반드시 포함되어야 합니다:
        </p>
        <div className="text-xs">
          <label
            className={`flex items-center mb-2 ${
              submitted && error.length ? "text-red-500" : "text-black"
            }`}
          >
            {getErrorIcon(!error.length)}{" "}
            <span className="ml-2">10자 이상</span>
          </label>
          <label
            className={`flex items-center mb-2 ${
              submitted && error.uppercase ? "text-red-500" : "text-black"
            }`}
          >
            {getErrorIcon(!error.uppercase)}{" "}
            <span className="ml-2">영어 대문자 1개 이상</span>
          </label>
          <label
            className={`flex items-center mb-2 ${
              submitted && error.specialChar ? "text-red-500" : "text-black"
            }`}
          >
            {getErrorIcon(!error.specialChar)}{" "}
            <span className="ml-2">특수문자 1개 이상 (예: !@#$%^&*)</span>
          </label>
        </div>
      </div>

      <SubmitButton
        label="다음"
        onClick={handleSubmit}
        className="w-full py-3 text-white bg-purple-600 rounded"
      />
    </div>
  );
}
