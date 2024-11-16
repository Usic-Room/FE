import { Metadata } from "next";
import { AuthHeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { ResetPasswordTitleSC } from "@/components/(auth)/serverComponents/ResetPasswordTitleSC";
import { ResetPasswordDescriptionSC } from "@/components/(auth)/serverComponents/ResetPasswordDescriptionSC";

import { ResetPasswordEmailForm } from "@/components/(auth)/clientComponents/ResetPasswordEmailForm";

export const metadata: Metadata = {
  title: "Enter email for register",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <AuthHeaderSpotifyLogoSC />
      <ResetPasswordTitleSC title="비밀번호를 재설정하세요." />
      <ResetPasswordDescriptionSC
        description="Spotify 계정에 연결된 이메일 주소를 입력해주시면 이메일을
      보내드리겠습니다."
      />
      <ResetPasswordEmailForm />
    </div>
  );
}
