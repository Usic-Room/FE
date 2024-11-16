import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { ResetPasswordTitleSC } from "@/components/(auth)/serverComponents/ResetPasswordTitleSC";
import { ResetPasswordDescriptionSC } from "@/components/(auth)/serverComponents/ResetPasswordDescriptionSC";

import { AuthLinkButtonSC } from "@/components/(auth)/serverComponents/AuthLinkButtonSC";

export const metadata: Metadata = {
  title: "Register Reset Password success",
};

export default function ResetPassworSuccessPage() {
  const loginPageUrl = process.env.NEXT_PUBLIC_LOGIN || "/error";

  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <AuthHeaderSpotifyLogoSC />
      <ResetPasswordTitleSC title="성공적으로 비밀번호가 변경되었습니다." />
      <ResetPasswordDescriptionSC description="Spotify 계정에 로그인하세요." />
      <div className="w-full">
        <AuthLinkButtonSC
          href={loginPageUrl}
          buttonDescription="로그인 화면으로 돌아가기"
        />
      </div>
    </div>
  );
}
