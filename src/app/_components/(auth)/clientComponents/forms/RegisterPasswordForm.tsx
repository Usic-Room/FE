"use client";

import React from "react";

import { useRegisterPasswordForm } from "@/hooks/useRegisterPasswordForm";

import { RegisterPasswordInputCC } from "@/components/(auth)/clientComponents/RegisterPasswordInputCC";
import { RegisterPasswordValidationErrorsCC } from "@/components/(auth)/clientComponents/RegisterPasswordValidationErrorsCC";
import { RegisterPasswordSubmitButtonCC } from "@/components/(auth)/clientComponents/RegisterPasswordSubmitButtonCC";

import { RegisterPasswordErrorIcon } from "@/public/icons/ErrorIcon";

export function RegisterPasswordForm() {
  const { password, setPassword, error, submitted, isFormValid, handleSubmit } =
    useRegisterPasswordForm();

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
      <RegisterPasswordInputCC
        password={password}
        setPassword={setPassword}
        error={error}
        submitted={submitted}
      />
      <RegisterPasswordValidationErrorsCC
        error={error}
        submitted={submitted}
        getErrorIcon={getErrorIcon}
      />
      <RegisterPasswordSubmitButtonCC
        isFormValid={isFormValid}
        handleSubmit={handleSubmit}
      />
    </form>
  );
}
