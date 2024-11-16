import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/app/_components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { ResetPasswordTitleSC } from "@/app/_components/(auth)/serverComponents/ResetPasswordTitleSC";
import { ResetPasswordDescriptionSC } from "@/app/_components/(auth)/serverComponents/ResetPasswordDescriptionSC";

import { ResetPasswordForm } from "@/app/_components/(auth)/clientComponents/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Reset password",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <AuthHeaderSpotifyLogoSC />
      <ResetPasswordTitleSC title="비밀번호를 재설정합니다." />
      <ResetPasswordDescriptionSC description="새로운 비밀번호를 입력해주세요." />
      <ResetPasswordForm />
    </div>
  );
}
