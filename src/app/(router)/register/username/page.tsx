import React from "react";
import { RegisterUsernameForm } from "@/app/(router)/register/username/_components/clientComponents"; // Correct import path

import { HeaderSpotifyLogo } from "@/app/(router)/register/_components/serverComponents";
import {
  ProgessBarAndSections,
  BackToPreviousLevelPage,
} from "../password/_components/serverComponents";

export default function RegisterUsername() {
  const registerPasswordUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_PASSWORD || "/register/password";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <HeaderSpotifyLogo />
      <ProgessBarAndSections width="66%" />
      <BackToPreviousLevelPage
        level="2"
        title="자신을 소개해주세요"
        backURL={registerPasswordUrl}
      />
      <RegisterUsernameForm />
    </div>
  );
}
