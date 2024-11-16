import React from "react";
import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { AuthPageTitleSC } from "@/app/_components/(auth)/serverComponents/AuthPageTitleSC";
import { AuthPageDescriptionSC } from "@/app/_components/(auth)/serverComponents/AuthPageDescriptionSC";

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
      <AuthPageTitleSC title="환영합니다!" />
      <AuthPageDescriptionSC
        description={`가입한 이메일로 인증코드를 보냈습니다.\n코드를 입력해주세요.`}
      />
      <RegisterVerificationCodeForm />
    </div>
  );
}
