import { HeaderSpotifyLogo } from "@/router/register/_components/serverComponents";

import {
  ResetPasswordPageTitle,
  ResetPasswordPageDescription,
} from "@/app/(router)/login/reset-password/_components/serverComponents";

import { ResetPasswordForm } from "@/router/login/reset-password/_components/clientComponents";

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
