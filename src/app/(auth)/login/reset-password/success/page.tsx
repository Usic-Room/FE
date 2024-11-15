import { HeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents";
import { Metadata } from "next";

import {
  ResetPasswordPageTitleSC,
  ResetPasswordPageDescriptionSC,
} from "@/components/(auth)/login/reset-password/serverComponents";
import { AuthLinkButtonSC } from "@/components/(auth)/serverComponents";

export const metadata: Metadata = {
  title: "Register Reset Password success",
};

export default function ResetPassworSuccessPage() {
  const loginPageUrl = process.env.NEXT_PUBLIC_LOGIN || "/error";

  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogoSC />
      <ResetPasswordPageTitleSC title="성공적으로 비밀번호가 변경되었습니다." />
      <ResetPasswordPageDescriptionSC description="Spotify 계정에 로그인하세요." />
      <div className="w-full">
        <AuthLinkButtonSC
          href={loginPageUrl}
          buttonDescription="로그인 화면으로 돌아가기"
        />
      </div>
    </div>
  );
}
