import { HeaderSpotifyLogo } from "@/auth/register/_components/serverComponents";

import {
  ResetPasswordEmailPageTitle,
  ResetPasswordEmailPageDescription,
} from "@/auth/login/reset-password/email/_components/serverComponents";
import { Metadata } from "next";
import { ResetPasswordEmailForm } from "@/auth/login/reset-password/email/_components/clientComponents";

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
