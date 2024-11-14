"use client";

import React from "react";
import Link from "next/link";
import { useFormContext } from "@/contexts/registerFormContext";
import { useRegisterEmailForm } from "@/hooks/useRegisterEmailForm";
import { AuthLinkButtonSC } from "@/components/(auth)/serverComponents";
import { AuthHandleOnclickButtonCC } from "@/components/(auth)/clientComponents";

export function RegisterEmailForm() {
  const { email, setEmail, error, submitted, isEmailValid, handleSubmit } =
    useRegisterEmailForm();
  return (
    <div className="w-3/4 sm:w-full mb-4">
      <EmailInputField error={error} submitted={submitted} />
      <EmailSubmitButton
        isEmailValid={isEmailValid}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
interface EmailInputFieldProps {
  error: { empty: boolean; invalid: boolean };
  submitted: boolean;
}
export function EmailInputField({ error, submitted }: EmailInputFieldProps) {
  const { email, setEmail } = useFormContext(); // Use context to get/set email
  return (
    <div className="w-full text-left mt-14">
      <p className="mb-2 font-bold text-sm">이메일 주소</p>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update context state
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
    </div>
  );
}
interface EmailSubmitButtonProps {
  isEmailValid: boolean;
  handleSubmit: () => void;
}
// Submit button for the email input
export function EmailSubmitButton({
  isEmailValid,
  handleSubmit,
}: EmailSubmitButtonProps) {
  const registrationUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_PASSWORD || "/error";
  return isEmailValid ? (
    <AuthLinkButtonSC href={registrationUrl} buttonDescription="다음" />
  ) : (
    <AuthHandleOnclickButtonCC
      handleSubmit={handleSubmit}
      buttonDescription="다음"
    />
  );
}
