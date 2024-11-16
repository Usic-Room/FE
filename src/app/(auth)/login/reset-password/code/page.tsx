import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { ResetPasswordTitleSC } from "@/components/(auth)/serverComponents/ResetPasswordTitleSC";
import { ResetPasswordDescriptionSC } from "@/components/(auth)/serverComponents/ResetPasswordDescriptionSC";
import { AuthLinkButtonSC } from "@/components/(auth)/serverComponents/AuthLinkButtonSC";

import { ResetCodeResendButtonCC } from "@/components/(auth)/clientComponents/ResetCodeResendButtonCC";

export const metadata: Metadata = {
  title: "Register Reset Password Send Code",
};

//TODO: API로 이메일 코드 보내기
export default function ResetPasswordSendCodePage() {
  const loginPageUrl = process.env.NEXT_PUBLIC_LOGIN || "/error";

  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <AuthHeaderSpotifyLogoSC />
      <ResetPasswordTitleSC title="받은 편지함을 확인하세요." />
      <ResetPasswordDescriptionSC description="이메일을 보내드렸습니다. 지침에 따라 Spotify 계정에 로그인하세요." />
      <div className="w-full">
        <AuthLinkButtonSC
          href={loginPageUrl}
          buttonDescription="로그인 화면으로 돌아가기"
        />
      </div>
      <ResetCodeResendButtonCC />
    </div>
  );
}
