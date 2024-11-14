import { Metadata } from "next";
import { HeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents";

import {
  ResetPasswordPageTitleSC,
  ResetPasswordPageDescriptionSC,
} from "@/components/(auth)/login/reset-password/serverComponents";

import { ResetPasswordEmailForm } from "@/components/(auth)/login/reset-password/email/clientComponents";

export const metadata: Metadata = {
  title: "Enter email for register",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogoSC />
      <ResetPasswordPageTitleSC title="비밀번호를 재설정하세요." />
      <ResetPasswordPageDescriptionSC
        description="Spotify 계정에 연결된 이메일 주소를 입력해주시면 이메일을
      보내드리겠습니다."
      />
      <ResetPasswordEmailForm />
    </div>
  );
}
