"use client";

import React, { useState, useEffect } from "react";
import { AuthHandleOnclickButtonCC } from "@/components/(auth)/clientComponents/AuthHandleOnclickButtonCC";

import { useResetPasswordEmail } from "@/hooks/useResetPasswordEmail";

// Email form to validate the input
//TODO: API CALL ERROR를 기반으로 에러 메시지 표현 코드 리팩토링 필요
//TODO: 200시, /login/reset-password/success로 이동하는 코드 추가 필요
export function ResetPasswordEmailForm() {
  const {
    email,
    setEmail,
    error,
    submitted,
    isEmailValid,
    handleSubmit,
    apiErrorMessage,
  } = useResetPasswordEmail();

  return (
    <div className="w-full mb-4">
      <ResetPasswordEmailInputField
        email={email}
        setEmail={setEmail}
        error={error}
        submitted={submitted}
        apiErrorMessage={apiErrorMessage}
      />
      <AuthHandleOnclickButtonCC
        handleSubmit={handleSubmit}
        buttonDescription="링크 보내기"
      />
    </div>
  );
}

interface ResetPasswordEmailInputFieldProps {
  email: string;
  setEmail: (email: string) => void;
  error: { empty: boolean; invalid: boolean };
  submitted: boolean;
  apiErrorMessage: string;
}

export function ResetPasswordEmailInputField({
  email,
  setEmail,
  error,
  submitted,
  apiErrorMessage,
}: ResetPasswordEmailInputFieldProps) {
  return (
    <div className="w-full text-left mt-14">
      <p className="mb-2 font-bold text-sm">이메일</p>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-full p-3 mb-3 ${
          submitted && (error.empty || error.invalid)
            ? "border-red-500"
            : "border-gray-400"
        } border rounded font-normal`}
      />
      {submitted && error.empty && (
        <p className="text-red-500 text-xs mb-1">이메일을 입력해 주세요.</p>
      )}
      {submitted && error.invalid && (
        <p className="text-red-500 text-xs mb-1">
          올바른 이메일 형식을 입력해 주세요.
        </p>
      )}
      {apiErrorMessage && (
        <p className="text-red-500 text-xs mb-1">{apiErrorMessage}</p>
      )}
    </div>
  );
}
