import React from "react";
import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { RegisterProgessBarAndSectionsSC } from "@/components/(auth)/serverComponents/RegisterProgessBarAndSectionsSC";
import { BackToPreviousLevelPageButtonSC } from "@/components/(auth)/serverComponents/BackToPreviousLevelPageButtonSC";

import { RegisterUsernameForm } from "@/app/_components/(auth)/clientComponents/RegisterUsernameForm";

export const metadata: Metadata = {
  title: "User information",
};

export default function RegisterUsernamePage() {
  const registerPasswordUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_PASSWORD || "/register/password";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <AuthHeaderSpotifyLogoSC />
      <RegisterProgessBarAndSectionsSC width="66%" />
      <BackToPreviousLevelPageButtonSC
        level="2"
        title="자신을 소개해주세요"
        backURL={registerPasswordUrl}
      />
      <RegisterUsernameForm />
    </div>
  );
}
