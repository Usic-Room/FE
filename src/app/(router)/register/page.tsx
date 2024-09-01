"use client";

import { useState } from "react";

import GoogleIcon from "@/public/icons/google-24.svg"; // Correct import path
import SpotifyLogo from "@/public/icons/spotify.svg"; // Correct import path

import { EmailInputField } from "@/app/(router)/register/_components/clientcomponents"; // Correct import path
import {
  RegisterEmailTitle,
  SubmitButton,
  SeperateOtherLoginWay,
  GoogleOauthButton,
  MoveToLoginPageButton,
} from "@/app/(router)/register/_components/serverComponents";

export default function RegisterEmail() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setError("This field is required.");
    } else if (!email.includes("@")) {
      setError("Please enter a valid email address.");
    } else {
      // Handle form submission
      setError("");
    }
  };
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center right- bg-white min-h-screen font-pretendard font-bold">
      <RegisterEmailTitle />
      <EmailInputField email={email} setEmail={setEmail} error={error} />{" "}
      <SubmitButton label="다음" onClick={handleSubmit} />{" "}
      <SeperateOtherLoginWay />
      <GoogleOauthButton />
      <MoveToLoginPageButton />
    </div>
  );
}
