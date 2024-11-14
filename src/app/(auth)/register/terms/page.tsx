import React from "react";
import { HeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents";

import {
  ProgessBarAndSectionsSC,
  BackToPreviousLevelPageButtonSC,
} from "@/components/(auth)/register/serverComponents";
import { RegisterTermsForm } from "@/app/_components/(auth)/register/terms/clientComponents";
import { Metadata } from "next";
import { MoveToNextPageFromTermsButton } from "@/app/_components/(auth)/register/terms/serverComponents";

export const metadata: Metadata = {
  title: "Register Term",
};

export default function RegisterTerm() {
  const registeUsernamerUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_USERNAME || "/register/username";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogoSC />
      <ProgessBarAndSectionsSC width="100%" />
      <BackToPreviousLevelPageButtonSC
        level="3"
        title="약관"
        backURL={registeUsernamerUrl}
      />
      <RegisterTermsForm />
      <MoveToNextPageFromTermsButton />
    </div>
  );
}
