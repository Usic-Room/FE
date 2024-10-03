import React from "react";
import { HeaderSpotifyLogo } from "@/auth/register/_components/serverComponents";

import {
  VerificationPageTitle,
  VerificationPageDescription,
} from "@/auth/register/verification/_components/serverComponents";
import { Metadata } from "next";
import { VerificationCodeForm } from "@/auth/register/verification/_components/clientComponents";

export const metadata: Metadata = {
  title: "Verification",
};

export default function RegisterVerification() {
  const registeUsernamerUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_USERNAME || "/register/username";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogo />
      <VerificationPageTitle />
      <VerificationPageDescription />
      <VerificationCodeForm />
    </div>
  );
}
