"use client";

import React, { useState, useEffect } from "react";
import { AuthHandleOnclickButtonCC } from "@/components/(auth)/clientComponents/AuthHandleOnclickButtonCC";

import { useResetPasswordEmail } from "@/hooks/useResetPasswordEmail";

import { ResetPasswordEmailInputFieldCC } from "@/components/(auth)/clientComponents/ResetPasswordEmailInputFieldCC";

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
      <ResetPasswordEmailInputFieldCC
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
