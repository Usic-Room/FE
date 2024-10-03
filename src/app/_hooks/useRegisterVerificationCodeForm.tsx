import { useState, useEffect } from "react";
import { verifyEmailCode, createEmailCode } from "@/auth/register/api/router";

export const useRegisterVerificationCodeForm = () => {
  const [code, setCode] = useState(""); // Code entered by user
  const [timer, setTimer] = useState(300); // Timer for code validity (5 minutes)
  const [errorMessage, setErrorMessage] = useState(""); // Error messages
  const [isCodeValid, setIsCodeValid] = useState(false); // Check if code is valid

  // Fetch the verification code when the component mounts
  useEffect(() => {
    const fetchVerificationCode = async () => {
      try {
        const response = await createEmailCode();
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
  }, []);

  // Countdown timer for the verification code
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [timer]);

  // Format the timer as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Handle code input validation
  const handleCodeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCode(value);
      setIsCodeValid(value.length === 6); // The code is valid if it's exactly 6 digits
    }
  };

  // Handle form submission and verification code validation
  const handleSubmit = async () => {
    if (code.length !== 6) {
      setErrorMessage("인증 코드는 6자리 숫자여야 합니다.");
      return;
    }

    try {
      const data = await verifyEmailCode(code); // Verify the code via API
      console.log("Verification successful:", data);
      setErrorMessage(""); // Clear any previous error messages
      alert("Verification successful!");
    } catch (error) {
      setErrorMessage("서버 에러. 나중에 다시 시도해 주세요.");
    }
  };

  return {
    code,
    timer,
    errorMessage,
    isCodeValid,
    handleCodeInput,
    handleSubmit,
    formatTime,
  };
};
