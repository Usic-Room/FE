import { HeaderSpotifyLogo } from "@/components/(auth)/register/serverComponents";
import { Metadata } from "next";
import {
  ResetPasswordSuccessPageTitle,
  ResetPasswordSuccessPageDescription,
  BackToLoginPageButton,
} from "@/components/(auth)/login/reset-password/success/serverComponents";

export const metadata: Metadata = {
  title: "Register success",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogo />
      <ResetPasswordSuccessPageTitle />
      <ResetPasswordSuccessPageDescription />
      <BackToLoginPageButton />
    </div>
  );
}
