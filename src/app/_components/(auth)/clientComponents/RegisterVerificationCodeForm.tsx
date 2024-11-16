"use client";

import React from "react";
import { RegisterVerificationSubmitButtonCC } from "@/app/_components/(auth)/clientComponents/RegisterVerificationSubmitButtonCC";
import { useRegisterVerificationCodeForm } from "@/hooks/useRegisterVerificationCodeForm";

export function RegisterVerificationCodeForm() {
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
      <RegisterVerificationSubmitButtonCC
        isCodeValid={isCodeValid}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
