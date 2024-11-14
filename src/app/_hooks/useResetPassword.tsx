// hooks/useResetPassword.ts

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export function useResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    length: false,
    uppercase: false,
    specialChar: false,
  });
  const [confirmError, setConfirmError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  // 비밀번호 유효성 검사
  useEffect(() => {
    const length = password.length >= 10;
    const uppercase = /[A-Z]/.test(password);
    const specialChar = /[!@#$%^&*]/.test(password);

    setError({
      length: !length,
      uppercase: !uppercase,
      specialChar: !specialChar,
    });

    setConfirmError(confirmPassword !== password);
  }, [password, confirmPassword]);

  // 폼 제출 핸들러
  const handleSubmit = async () => {
    setSubmitted(true);
    const isPasswordValid =
      !error.length && !error.uppercase && !error.specialChar;
    const isConfirmValid = !confirmError;
    const updatePasswordUrl =
      process.env.NEXT_PUBLIC_BE_API_PASSWORD_RESET_UPDATE || "";
    const loginUrl = process.env.NEXT_PUBLIC_RESET_PASSWORD_SUCCESS || "";

    if (isPasswordValid && isConfirmValid && token) {
      try {
        const response = await fetch(`${updatePasswordUrl}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ newPassword: password }),
        });

        const data = await response.json();

        if (response.ok) {
          // 성공 시 성공 페이지로 이동
          router.push(`${loginUrl}`);
        } else {
          // API 오류 메시지 설정
          alert(data.error || "서버 에러가 발생했습니다.");
        }
      } catch (error: any) {
        alert(error.message || "서버 에러가 발생했습니다.");
      }
    }
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    submitted,
    confirmError,
    handleSubmit,
  };
}
