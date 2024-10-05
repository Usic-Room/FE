import { HeaderSpotifyLogo } from "@/components/(auth)/register/serverComponents";

import {
  ResetPasswordEmailPageTitle,
  ResetPasswordEmailPageDescription,
} from "@/components/(auth)/login/reset-password/email/serverComponents";
import { Metadata } from "next";
import { ResetPasswordEmailForm } from "@/components/(auth)/login/reset-password/email/clientComponents";

export const metadata: Metadata = {
  title: "Enter email for register",
};

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogo />
      <ResetPasswordEmailPageTitle />
      <ResetPasswordEmailPageDescription />
      <ResetPasswordEmailForm />
    </div>
  );
}
