"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useFormContext } from "@/app/(router)/register/_components/registerForm";

// Regular expression for username validation (simple one for this case)
const usernameRegex = /^.{3,}$/; // Minimum 3 characters required

// Username form to validate the input
export function RegisterUsernameForm() {
  const { username, setUsername } = useFormContext(); // Use context to manage username state
  const [error, setError] = useState({
    empty: true,
    invalid: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  // Validate the username
  useEffect(() => {
    const trimmedUsername = username.trim();
    const isEmpty = !trimmedUsername;
    const isInvalid = !usernameRegex.test(trimmedUsername);

    const newErrorState = {
      empty: isEmpty,
      invalid: isInvalid && !isEmpty,
    };

    setError(newErrorState);

    // Set form validity
    const isValidForm = !newErrorState.empty && !newErrorState.invalid;
    setIsUsernameValid(isValidForm);
  }, [username]);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-xs text-left mb-4">
      <UsernameInputField error={error} submitted={submitted} />
      <UsernameSubmitButton
        isUsernameValid={isUsernameValid}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

interface UsernameInputFieldProps {
  error: { empty: boolean; invalid: boolean };
  submitted: boolean;
}

// Username input field component
export function UsernameInputField({
  error,
  submitted,
}: UsernameInputFieldProps) {
  const { username, setUsername } = useFormContext(); // Use context to get/set username

  return (
    <div className="w-full text-left">
      <p className="mb-2 font-bold text-sm">이름</p>
      <p className="mb-2 text-sm">이 이름이 프로필에 표시됩니다.</p>
      <input
        type="text"
        placeholder="이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Update context state
        className={`w-full p-3 mb-3 ${
          submitted && (error.empty || error.invalid)
            ? "border-red-500"
            : "border-gray-400"
        } border rounded font-normal`}
      />
      {submitted && error.empty && (
        <p className="text-red-500 text-xs mb-1">이름을 입력해 주세요.</p>
      )}
      {submitted && error.invalid && (
        <p className="text-red-500 text-xs mb-1">
          이름은 최소 3자 이상이어야 합니다.
        </p>
      )}
    </div>
  );
}

interface UsernameSubmitButtonProps {
  isUsernameValid: boolean;
  handleSubmit: () => void;
}

// Submit button for the username input
export function UsernameSubmitButton({
  isUsernameValid,
  handleSubmit,
}: UsernameSubmitButtonProps) {
  const registrationUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_TERMS || "/error";

  return isUsernameValid ? (
    <Link href={registrationUrl}>
      <button className="w-full p-3 mt-44 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff]">
        다음
      </button>
    </Link>
  ) : (
    <button
      onClick={handleSubmit}
      className={`w-full p-3 mt-44 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal`}
    >
      다음
    </button>
  );
}
