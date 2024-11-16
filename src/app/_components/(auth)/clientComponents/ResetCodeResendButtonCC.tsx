"use client";
import { useEffect, useState } from "react";
import { createResetPasswordCode } from "@/auth/login/api/router";
import { useResetPasswordStore } from "@/app/_hooks/useResetPasswordEmail";

//export function createResetPasswordCode(email: string) {
//  return fetch(`http://localhost:8080/api/reset-password`, {
//    method: "POST",
//    headers: {
//      "Content-Type": "application/json",
//    },
//    body: JSON.stringify({ email }),
//  });
//}

export function ResetCodeResendButtonCC() {
  const [isResendButtonClicked, setIsResendButtonClicked] = useState(false);
  const { email } = useResetPasswordStore();

  useEffect(() => {
    console.log("ResetCodeResendButtonCC rendered");
  });

  const handleSubmit = async () => {
    try {
      setIsResendButtonClicked(true);
      const response = await createResetPasswordCode(email);
      if (response.ok) {
        console.log("Reset password link sent successfully:", response);
      } else if (response.status === 400) {
        throw new Error("Bad Request");
      } else {
        throw new Error("Server error during verification.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsResendButtonClicked(false);
    }
  };

  return (
    <button className="text-blue-283EA3" onClick={handleSubmit}>
      인증번호 재전송
    </button>
  );
}
