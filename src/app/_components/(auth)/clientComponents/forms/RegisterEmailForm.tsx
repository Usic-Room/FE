"use client";

import React from "react";
import Link from "next/link";

import { useRegisterEmailForm } from "@/hooks/useRegisterEmailForm";

import { AuthHandleOnclickButtonCC } from "@/components/(auth)/clientComponents/AuthHandleOnclickButtonCC";

import { RegisterEmailInputFieldCC } from "@/components/(auth)/clientComponents/RegisterEmailInputFieldCC";

export function RegisterEmailForm() {
  const { email, setEmail, error, submitted, isEmailValid, handleSubmit } =
    useRegisterEmailForm();

  return (
    <div className="w-3/4 sm:w-full mb-4">
      <RegisterEmailInputFieldCC error={error} submitted={submitted} />
      <AuthHandleOnclickButtonCC
        handleSubmit={handleSubmit}
        buttonDescription="다음"
      />
    </div>
  );
}
