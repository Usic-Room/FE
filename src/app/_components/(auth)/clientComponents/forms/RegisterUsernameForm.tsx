"use client";

import React, { useState, useEffect } from "react";

import { useRegisterUsernameForm } from "@/hooks/useRegisterUsernameForm";
import { RegisterUsernameInputFieldCC } from "@/components/(auth)/clientComponents/RegisterUsernameInputFieldCC";
import { RegisterUsernameSubmitButtonCC } from "@/components/(auth)/clientComponents/RegisterUsernameSubmitButtonCC";

// Main component to manage the username form
export function RegisterUsernameForm() {
  const { error, submitted, isUsernameValid, handleSubmit } =
    useRegisterUsernameForm();

  return (
    <div className="w-full max-w-xs text-left mb-4">
      <RegisterUsernameInputFieldCC error={error} submitted={submitted} />
      <RegisterUsernameSubmitButtonCC
        isUsernameValid={isUsernameValid}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
