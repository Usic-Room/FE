import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { RegisterProgessBarAndSectionsSC } from "@/components/(auth)/serverComponents/RegisterProgessBarAndSectionsSC";
import { RegisterBackToPreviousPageButtonSC } from "@/app/_components/(auth)/serverComponents/RegisterBackToPreviousPageButtonSC";

import { RegisterPasswordForm } from "@/components/(auth)/clientComponents/RegisterPasswordForm";

export const metadata: Metadata = {
  title: "Password",
};

//TODO: 입력필드, 글 div
export default function RegisterPassword() {
  const registerUrl = process.env.NEXT_PUBLIC_REGISTRATION || "/register";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <AuthHeaderSpotifyLogoSC />
      <RegisterProgessBarAndSectionsSC width="33%" />
      <RegisterBackToPreviousPageButtonSC
        level="1"
        title="비밀번호를 만드세요."
        backURL={registerUrl}
      />
      <RegisterPasswordForm />
    </div>
  );
}
