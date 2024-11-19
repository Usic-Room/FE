"use client";

import React from "react";
import { useResetPasswordForm } from "@/hooks/useResetPassword";

import { ResetPasswordInputCC } from "@/components/(auth)/clientComponents/ResetPasswordInputCC";
import { ResetPasswordValidationErrorsCC } from "@/components/(auth)/clientComponents/ResetPasswordValidationErrorsCC";
import { ResetPasswordConfirmPasswordInputCC } from "@/components/(auth)/clientComponents/ResetPasswordConfirmPasswordInputCC";
import { ResetPasswordSubmitButtonCC } from "@/components/(auth)/clientComponents/ResetPasswordSubmitButtonCC";

import { RegisterPasswordErrorIcon } from "@/public/icons/ErrorIcon";

export function ResetPasswordForm() {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    submitted,
    confirmError,
    handleSubmit,
  } = useResetPasswordForm();

  const getErrorIcon = (conditionMet: boolean) => {
    return (
      <span
        className={`inline-flex w-5 h-5 rounded-full items-center justify-center ${
          conditionMet
            ? "bg-green-500 text-white"
            : "bg-transparent border border-gray-400"
        }`}
      >
        {conditionMet && <RegisterPasswordErrorIcon />}
      </span>
    );
  };

  return (
    <form
      className="w-full max-w-xs text-left mb-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <ResetPasswordInputCC
        password={password}
        setPassword={setPassword}
        error={error}
        submitted={submitted}
      />
      <ResetPasswordValidationErrorsCC
        error={error}
        submitted={submitted}
        getErrorIcon={getErrorIcon}
      />
      <ResetPasswordConfirmPasswordInputCC
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        confirmError={confirmError}
        submitted={submitted}
      />
      <ResetPasswordSubmitButtonCC handleSubmit={handleSubmit} />
    </form>
  );
}
