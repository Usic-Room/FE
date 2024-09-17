import { HeaderSpotifyLogo } from "@/router/register/_components/serverComponents";

import {
  ResetPasswordEmailPageTitle,
  ResetPasswordEmailPageDescription,
} from "@/app/(router)/login/reset-password/email/_components/serverComponents";

import { ResetPasswordEmailForm } from "@/router/login/reset-password/email/_components/clientComponents";

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
