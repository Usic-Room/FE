"use client";

import React, { useState, useEffect } from "react";
import { verifyEmailCode, createEmailCode } from "@/router/register/api/router";
import { VerificationSubmitButton } from "@/router/register/verification/_components/serverComponents"; // Import the button component

export function VerificationCodeForm() {
  const [code, setCode] = useState(""); // Code entered by user
  const [timer, setTimer] = useState(300); // Timer for code validity (5 minutes)
  const [errorMessage, setErrorMessage] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);

  useEffect(() => {
    // Request the verification code when the user accesses the page
    const fetchVerificationCode = async () => {
      try {
        const response = await createEmailCode(); // Make the API call
        if (response.ok) {
          console.log("Verification code requested successfully.");
        } else {
          console.error("Failed to request verification code.");
          setErrorMessage("서버 에러. 나중에 다시 시도해 주세요.");
        }
      } catch (error) {
        console.error("Error while requesting verification code:", error);
        setErrorMessage("서버 에러. 나중에 다시 시도해 주세요.");
      }
    };

    fetchVerificationCode();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  useEffect(() => {
    // Countdown timer
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [timer]);

  // Format timer as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Handle code input and validation
  const handleCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCode(value);
      setIsCodeValid(value.length === 6); // Only valid if the code is exactly 6 digits
    }
  };

  // Handle submit logic and API call
  const handleSubmit = async () => {
    if (code.length !== 6) {
      setErrorMessage("인증 코드는 6자리 숫자여야 합니다.");
      return;
    }

    try {
      const data = await verifyEmailCode(code); // Make the API call
      console.log("Verification successful:", data);
      // You can navigate to the next step here or show a success message
      setErrorMessage(""); // Clear any previous error messages
      alert("Verification successful!");
    } catch (error) {
      setErrorMessage("서버 에러. 나중에 다시 시도해 주세요.");
    }
  };

  return (
    <div className="relative w-3/4 mb-4 text-left">
      <input
        type="text"
        value={code}
        onChange={handleCodeInput}
        className="w-full border border-gray-6A6A6A font-normal p-3 rounded text-center"
        maxLength={6}
        placeholder="6자리 숫자"
      />
      <span className="absolute right-3 top-4 text-gray-727272 font-normal">
        {formatTime(timer)}
      </span>

      {errorMessage && (
        <p className="text-red-500 text-xs mb-1">{errorMessage}</p>
      )}

      {/* Render the verification submit button */}
      <VerificationSubmitButton
        isCodeValid={isCodeValid}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
