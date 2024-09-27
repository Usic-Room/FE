import { HeaderSpotifyLogo } from "@/app/(auth)/register/_components/serverComponents";
import { Metadata } from "next";
import {
  ResetPasswordSuccessPageTitle,
  ResetPasswordSuccessPageDescription,
  BackToLoginPageButton,
} from "@/app/(auth)/login/reset-password/success/_components/serverComponents";

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
