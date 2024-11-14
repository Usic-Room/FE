import React from "react";
import { HeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents";

import {
  VerificationPageTitleSC,
  VerificationPageDescriptionSC,
} from "@/app/_components/(auth)/register/verification/serverComponents";
import { Metadata } from "next";
import { VerificationCodeForm } from "@/app/_components/(auth)/register/verification/clientComponents";

export const metadata: Metadata = {
  title: "Verification",
};

export default function RegisterVerification() {
  const registeUsernamerUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_USERNAME || "/register/username";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogoSC />
      <VerificationPageTitleSC />
      <VerificationPageDescriptionSC />
      <VerificationCodeForm />
    </div>
  );
}
