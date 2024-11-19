import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const useResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    length: true,
    uppercase: true,
    specialChar: true,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false); // 폼 제출 시도 여부
  const [isSubmitting, setIsSubmitting] = useState(false); // 제출 진행 중 여부
  const [isFormValid, setIsFormValid] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [submissionError, setSubmissionError] = useState(""); // 제출 관련 에러 메시지 //TODO: 통합 가능한지 체크
  const router = useRouter();

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
    setSubmissionError("");

    if (isFormValid) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/reset-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        });

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();

          if (response.ok) {
            alert(data.message || "Password reset successfully!");
            router.push(`${process.env.NEXT_PUBLIC_RESET_PASSWORD_SUCCESS}`);
          } else {
            throw new Error(data.message || "Failed to reset password.");
          }
        } else {
          throw new Error("Unexpected server response");
        }
      } catch (error) {
        setSubmissionError((error as Error).message);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
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
    isSubmitting, // 제출 진행 상태
    submissionError, // 제출 관련 에러 메시지
  };
};
