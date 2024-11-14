"use client";

import React from "react";
import { useRegisterVerificationCodeForm } from "@/hooks/useRegisterVerificationCodeForm";

interface VerificationSubmitButtonCCProps {
  isCodeValid: boolean;
  handleSubmit: () => void;
}

export function VerificationSubmitButtonCC({
  isCodeValid,
  handleSubmit,
}: VerificationSubmitButtonCCProps) {
  return (
    <button
      onClick={handleSubmit}
      className={`w-full p-3 mt-20 ${
        isCodeValid
          ? "bg-purple-AC25FF hover:bg-[#ac44ff]"
          : "bg-gray-400 cursor-not-allowed"
      } text-white rounded-full font-normal`}
      disabled={!isCodeValid}
    >
      확인
    </button>
  );
}

export function VerificationCodeForm() {
  const {
    code,
    timer,
    errorMessage,
    isCodeValid,
    handleCodeInput,
    handleSubmit,
    formatTime,
  } = useRegisterVerificationCodeForm();

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
      <VerificationSubmitButtonCC
        isCodeValid={isCodeValid}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
