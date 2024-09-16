"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useFormContext } from "@/app/(router)/register/_components/registerForm";

// Regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Email form to validate the input
export function RegisterEmailForm() {
  const { email, setEmail } = useFormContext(); // Use context to manage email state
  const [error, setError] = useState({
    empty: true,
    invalid: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

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

  const handleSubmit = () => {
    setSubmitted(true);
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
      {submitted && error.empty && <p className="text-red-500 text-xs mb-1">이메일을 입력해 주세요.</p>}
      {submitted && error.invalid && <p className="text-red-500 text-xs mb-1">올바른 이메일 형식을 입력해 주세요.</p>}
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
  const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION_PASSWORD || "/error";

  return isEmailValid ? (
    <Link href={registrationUrl}>
      <button className="w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal">
        다음
      </button>
    </Link>
  ) : (
    <button
      onClick={handleSubmit}
      className={`w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal`}
    >
      다음
    </button>
  );
}
