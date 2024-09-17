import React from "react";
import { HeaderSpotifyLogo } from "@/app/(router)/register/_components/serverComponents";

import {
  VerificationPageTitle,
  VerificationPageDescription,
} from "@/app/(router)/register/verification/_components/serverComponents";

import { VerificationCodeForm } from "@/app/(router)/register/verification/_components/clientComponents";

import { MoveToNextPageFromTermsButton } from "@/app/(router)/register/terms/_components/serverComponents";

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
