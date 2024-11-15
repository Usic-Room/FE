"use client";

import React from "react";
import { useResetPasswordForm } from "@/hooks/useResetPassword";
import { usePasswordVisibility } from "@/app/_hooks/usePasswordVisibility";
import { useConfirmPasswordVisibility } from "@/hooks/useConfirmPasswordVisibility";

import { LoginSubmitButtonCC } from "@/app/_components/(auth)/login/clientComponents";

import {
  RegisterPasswordErrorIcon,
  ShowPasswordIcon,
  HidePasswordIcon,
} from "@/public/icons/ErrorIcon";

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
    isSubmitting,
    submissionError,
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
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
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
      {submissionError && (
        <p className="text-red-500 text-xs mb-4">{submissionError}</p>
      )}
      <LoginSubmitButtonCC
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        buttonDescription="비밀번호 재설정"
        buttonSubmittingDescription="비밀번호 재설정 중..."
      />
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
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();

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
          onClick={togglePasswordVisibility}
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

interface ConfirmPasswordInputProps {
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  confirmError: boolean;
  submitted: boolean;
}

export function ConfirmPasswordInput({
  confirmPassword,
  setConfirmPassword,
  confirmError,
  submitted,
}: ConfirmPasswordInputProps) {
  const { showConfirmPassword, toggleConfirmPasswordVisibility } =
    useConfirmPasswordVisibility();

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
          onClick={toggleConfirmPasswordVisibility}
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

//interface PasswordSubmitButtonProps {
//  handleSubmit: () => void; // 제출 핸들러
//  isSubmitting: boolean; // 제출 진행 상태
//}

//export function PasswordSubmitButton({
//  handleSubmit,
//  isSubmitting,
//}: PasswordSubmitButtonProps) {
//  return (
//    <button
//      onClick={handleSubmit}
//      disabled={isSubmitting} // 제출 중일 때 버튼 비활성화
//      // onClick 핸들러는 `form`의 onSubmit에서 처리하므로 제거해도 무방합니다.
//      className={`w-80 p-3 text-white rounded-full font-bold mb-4 ${
//        isSubmitting
//          ? "bg-gray-400 cursor-not-allowed"
//          : "bg-purple-AC25FF hover:bg-[#ac44ff]"
//      }`}
//    >
//      {isSubmitting ? "비밀번호 재설정 중..." : "비밀번호 재설정"}
//    </button>
//  );
//}
