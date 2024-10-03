import React from "react";
import { HeaderSpotifyLogo } from "@/auth/register/_components/serverComponents";

import {
  ProgessBarAndSections,
  BackToPreviousLevelPage,
} from "@/auth/register/password/_components/serverComponents";
import { RegisterTermsForm } from "@/auth/register/terms/_components/clientComponents";
import { Metadata } from "next";
import { MoveToNextPageFromTermsButton } from "@/auth/register/terms/_components/serverComponents";

export const metadata: Metadata = {
  title: "Register Term",
};

export default function RegisterTerm() {
  const registeUsernamerUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_USERNAME || "/register/username";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogo />
      <ProgessBarAndSections width="100%" />
      <BackToPreviousLevelPage
        level="3"
        title="약관"
        backURL={registeUsernamerUrl}
      />
      <RegisterTermsForm />
      <MoveToNextPageFromTermsButton />
    </div>
  );
}
