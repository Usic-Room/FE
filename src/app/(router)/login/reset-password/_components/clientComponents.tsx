"use client";

import React, { useState, useEffect } from "react";
import {
  RegisterPasswordErrorIcon,
  ShowPasswordIcon,
  HidePasswordIcon,
} from "@/public/icons/ErrorIcon";

export function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    length: true,
    uppercase: true,
    specialChar: true,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  useEffect(() => {
    const isLengthValid = password.length >= 10;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const passwordsMatch = confirmPassword === password;

    const newErrorState = {
      length: !isLengthValid,
      uppercase: !hasUppercase,
      specialChar: !hasSpecialChar,
    };

    setError(newErrorState);
    setConfirmError(!passwordsMatch);

    const isValidForm =
      !newErrorState.length &&
      !newErrorState.uppercase &&
      !newErrorState.specialChar &&
      passwordsMatch;

    setIsFormValid(isValidForm);
  }, [password, confirmPassword]);

  const handleSubmit = async () => {
    setSubmitted(true);

    //TODO: API call to reset password
    if (isFormValid) {
      // Handle form submission
    }
  };

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
      <PasswordInput
        password={password}
        setPassword={setPassword}
        error={error}
        submitted={submitted}
      />
      <PasswordValidationErrors
        error={error}
        submitted={submitted}
        getErrorIcon={getErrorIcon}
      />
      <ConfirmPasswordInput
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        confirmError={confirmError}
        submitted={submitted}
      />
      <PasswordSubmitButton handleSubmit={handleSubmit} />
    </form>
  );
}

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
  error: { length: boolean; uppercase: boolean; specialChar: boolean };
  submitted: boolean;
}

export function PasswordInput({
  password,
  setPassword,
  error,
  submitted,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full mb-4">
      <p className="mb-2 font-bold text-sm">비밀번호</p>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className={`w-full border ${
            submitted && (error.length || error.uppercase || error.specialChar)
              ? "border-red-500"
              : "border-gray-300"
          } p-4 rounded`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </button>
      </div>
    </div>
  );
}

interface PasswordValidationErrorsProps {
  error: { length: boolean; uppercase: boolean; specialChar: boolean };
  submitted: boolean;
  getErrorIcon: (conditionMet: boolean) => JSX.Element;
}

export function PasswordValidationErrors({
  error,
  submitted,
  getErrorIcon,
}: PasswordValidationErrorsProps) {
  return (
    <div className="w-full mb-8">
      <p className="text-sm mb-2 font-bold">
        비밀번호에는 다음 문자가 반드시 포함되어야 합니다:
      </p>
      <div className="text-xs">
        <label
          className={`flex items-center mb-2 ${
            submitted && error.length ? "text-red-500" : "text-black"
          }`}
        >
          {getErrorIcon(!error.length)} <span className="ml-2">10자 이상</span>
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
  );
}

export function ConfirmPasswordInput({
  confirmPassword,
  setConfirmPassword,
  confirmError,
  submitted,
}: {
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  confirmError: boolean;
  submitted: boolean;
}) {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="mb-4">
      <p className="mb-2 font-bold text-sm">새로운 비밀번호 확인하기</p>
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="새로운 비밀번호 확인"
          className={`w-full border ${
            submitted && confirmError ? "border-red-500" : "border-gray-300"
          } p-4 rounded`}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute inset-y-0 right-3 flex items-center"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          {showConfirmPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </button>
      </div>
      {submitted && confirmError && (
        <p className="text-red-500 text-xs mt-1">
          비밀번호가 일치하지 않습니다.
        </p>
      )}
    </div>
  );
}

interface PasswordSubmitButtonProps {
  handleSubmit: () => void;
}

export function PasswordSubmitButton({
  handleSubmit,
}: PasswordSubmitButtonProps) {
  return (
    <button
      onClick={handleSubmit}
      className={`w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal`}
    >
      로그인하기
    </button>
  );
}
