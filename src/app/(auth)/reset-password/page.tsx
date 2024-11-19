import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/app/_components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";

import { AuthPageTitleSC } from "@/app/_components/(auth)/serverComponents/AuthPageTitleSC";
import { AuthPageDescriptionSC } from "@/app/_components/(auth)/serverComponents/AuthPageDescriptionSC";
import { ResetPasswordForm } from "@/app/_components/(auth)/clientComponents/forms/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Reset password",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <AuthHeaderSpotifyLogoSC />
      <AuthPageTitleSC title="비밀번호를 재설정합니다." />
      <AuthPageDescriptionSC description="새로운 비밀번호를 입력해주세요." />
      <ResetPasswordForm />
    </div>
  );
}
