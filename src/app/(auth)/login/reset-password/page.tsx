import { HeaderSpotifyLogo } from "@/auth/register/_components/serverComponents";
import { Metadata } from "next";
import {
  ResetPasswordPageTitle,
  ResetPasswordPageDescription,
} from "@/auth/login/reset-password/_components/serverComponents";

import { ResetPasswordForm } from "@/auth/login/reset-password/_components/clientComponents";

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
