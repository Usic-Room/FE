// src/hooks/useResetPasswordEmail.ts

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createResetPasswordCode } from "@/auth/login/api/router";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function useResetPasswordEmail() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    empty: false,
    invalid: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState("");
  const router = useRouter();

  // 이메일 유효성 검사
  useEffect(() => {
    const trimmedEmail = email.trim();
    const isEmpty = !trimmedEmail;
    const isInvalid = !emailRegex.test(trimmedEmail);

    setError({
      empty: isEmpty,
      invalid: isInvalid && !isEmpty,
    });

    setIsEmailValid(!isEmpty && !isInvalid);
  }, [email]);

  // 폼 제출 핸들러
  const handleSubmit = async () => {
    setSubmitted(true);
    if (isEmailValid) {
      try {
        const response = await createResetPasswordCode(email);
        console.log("Reset password link sent successfully:", response);
        // 성공 시 리디렉션
        router.push("/login/reset-password/success");
      } catch (error: any) {
        setApiErrorMessage(error.message || "서버 에러가 발생했습니다.");
      }
    }
  };

  return {
    email,
    setEmail,
    error,
    submitted,
    isEmailValid,
    handleSubmit,
    apiErrorMessage,
  };
}
