"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { createResetPasswordCode } from "@/auth/login/api/router";
import { AuthLinkButtonSC } from "../../../serverComponents";
import { AuthHandleOnclickButtonCC } from "../../../clientComponents";

// Regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Email form to validate the input
//TODO: API CALL ERROR를 기반으로 에러 메시지 표현 코드 리팩토링 필요
//TODO: 200시, /login/reset-password/success로 이동하는 코드 추가 필요
export function ResetPasswordEmailForm() {
  const [email, setEmail] = useState(""); // Use context to manage email state
  const [error, setError] = useState({
    empty: true,
    invalid: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(""); // State for API error messages

  // Validate the email
  useEffect(() => {
    const trimmedEmail = email.trim();
    const isEmpty = !trimmedEmail;
    const isInvalid = !emailRegex.test(trimmedEmail);

    const newErrorState = {
      empty: isEmpty,
      invalid: isInvalid && !isEmpty,
    };

    setError(newErrorState);

    // Set form validity
    const isValidForm = !newErrorState.empty && !newErrorState.invalid;
    setIsEmailValid(isValidForm);
  }, [email]);

  const handleSubmit = async () => {
    setSubmitted(true);

    if (isEmailValid) {
      try {
        const response = await createResetPasswordCode(email); // Make the API call
        console.log("Reset password link sent successfully:", response);
        // You can show a success message or redirect the user here
        alert("Reset password link has been sent to your email.");
      } catch (error: Error | any) {
        setApiErrorMessage(error.message || "Server error. Please try again.");
      }
    }
  };

  return (
    <div className="w-full mb-4">
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
  const [email, setEmail] = useState(""); // Use context to manage email state

  return (
    <div className="w-full text-left mt-14">
      <p className="mb-2 font-bold text-sm">이메일</p>
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
    <AuthLinkButtonSC href={registrationUrl} buttonDescription="링크 보내기" />
  ) : (
    <AuthHandleOnclickButtonCC
      handleSubmit={handleSubmit}
      buttonDescription="링크 보내기"
    />
  );
}
