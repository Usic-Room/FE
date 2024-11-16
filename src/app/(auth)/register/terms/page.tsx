import React from "react";
import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { RegisterProgessBarAndSectionsSC } from "@/components/(auth)/serverComponents/RegisterProgessBarAndSectionsSC";
import { RegisterBackToPreviousPageButtonSC } from "@/app/_components/(auth)/serverComponents/RegisterBackToPreviousPageButtonSC";
import { RegisterMoveToNextPageFromTermsButtonSC } from "@/app/_components/(auth)/serverComponents/RegisterMoveToNextPageFromTermsButtonSC";

import { RegisterTermsForm } from "@/components/(auth)/clientComponents/RegisterTermsForm";

export const metadata: Metadata = {
  title: "Register Term",
};

export default function RegisterTermPage() {
  const registeUsernamerUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_USERNAME || "/register/username";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <AuthHeaderSpotifyLogoSC />
      <RegisterProgessBarAndSectionsSC width="100%" />
      <RegisterBackToPreviousPageButtonSC
        level="3"
        title="약관"
        backURL={registeUsernamerUrl}
      />
      <RegisterTermsForm />
      <RegisterMoveToNextPageFromTermsButtonSC />
    </div>
  );
}
