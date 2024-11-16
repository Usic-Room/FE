import React from "react";
import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { RegisterVerificationPageTitleSC } from "@/app/_components/(auth)/serverComponents/RegisterVerificationPageTitleSC";
import { RegisterVerificationPageDescriptionSC } from "@/app/_components/(auth)/serverComponents/RegisterVerificationPageDescriptionSC";

import { RegisterVerificationCodeForm } from "@/app/_components/(auth)/clientComponents/RegisterVerificationCodeForm";

export const metadata: Metadata = {
  title: "Verification",
};

export default function RegisterVerificationPage() {
  const registeUsernamerUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_USERNAME || "/register/username";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <AuthHeaderSpotifyLogoSC />
      <RegisterVerificationPageTitleSC />
      <RegisterVerificationPageDescriptionSC />
      <RegisterVerificationCodeForm />
    </div>
  );
}
