import React from "react";
import { RegisterUsernameForm } from "@/app/_components/(auth)/register/username/clientComponents"; // Correct import path
import { Metadata } from "next";
import { HeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents";

import {
  BackToPreviousLevelPageButtonSC,
  ProgessBarAndSectionsSC,
} from "@/components/(auth)/register/serverComponents";

export const metadata: Metadata = {
  title: "User information",
};

export default function RegisterUsername() {
  const registerPasswordUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_PASSWORD || "/register/password";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <HeaderSpotifyLogoSC />
      <ProgessBarAndSectionsSC width="66%" />
      <BackToPreviousLevelPageButtonSC
        level="2"
        title="자신을 소개해주세요"
        backURL={registerPasswordUrl}
      />
      <RegisterUsernameForm />
    </div>
  );
}
