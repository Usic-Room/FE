import { HeaderSpotifyLogo } from "@/app/_components/(auth)/register/serverComponents";
import { Metadata } from "next";
import {
  ResetPasswordPageTitle,
  ResetPasswordPageDescription,
} from "@/app/_components/(auth)/login/reset-password/serverComponents";

import { ResetPasswordForm } from "@/app/_components/(auth)/login/reset-password/clientComponents";

export const metadata: Metadata = {
  title: "Reset password",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogo />
      <ResetPasswordPageTitle />
      <ResetPasswordPageDescription />
      <ResetPasswordForm />
    </div>
  );
}
