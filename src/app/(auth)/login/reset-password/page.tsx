import { HeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents";
import { Metadata } from "next";
import {
  ResetPasswordPageTitleSC,
  ResetPasswordPageDescriptionSC,
} from "@/app/_components/(auth)/login/reset-password/serverComponents";

import { ResetPasswordForm } from "@/app/_components/(auth)/login/reset-password/clientComponents";

export const metadata: Metadata = {
  title: "Reset password",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogoSC />
      <ResetPasswordPageTitleSC title="비밀번호를 재설정합니다." />
      <ResetPasswordPageDescriptionSC description="새로운 비밀번호를 입력해주세요." />
      <ResetPasswordForm />
    </div>
  );
}
