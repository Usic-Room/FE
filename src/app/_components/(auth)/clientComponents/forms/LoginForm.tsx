"use client";
import { useLoginForm } from "@/hooks/useLoginForm";

import { LoginPasswordInputFieldCC } from "@/components/(auth)/clientComponents/LoginPasswordInputFieldCC";
import { LoginSubmitButtonCC } from "@/components/(auth)/clientComponents/LoginSubmitButtonCC";
import { LoginEmailInputFieldCC } from "@/components/(auth)/clientComponents/LoginEmailInputFieldCC";

// LoginForm component to submit API request and handle responses
//TODO: 이메일, 비밀번호 REGEX 검사 추가

export function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    isSubmitting,
    handleLogin,
  } = useLoginForm();

  return (
    <div className="w-full max-w-xs mx-auto">
      {/* Email Input Field */}
      <LoginEmailInputFieldCC email={email} setEmail={setEmail} />

      {/* Password Input Field */}
      <LoginPasswordInputFieldCC
        password={password}
        setPassword={setPassword}
      />

      {/* Error message display */}
      {errorMessage && (
        <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
      )}

      {/* Submit button */}
      <LoginSubmitButtonCC
        handleSubmit={handleLogin}
        isSubmitting={isSubmitting}
        buttonDescription="로그인하기"
        buttonSubmittingDescription="로그인 중..."
      />
    </div>
  );
}
