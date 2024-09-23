import { HeaderSpotifyLogo } from "@/router/register/_components/serverComponents";

import {
  ResetPasswordSuccessPageTitle,
  ResetPasswordSuccessPageDescription,
  BackToLoginPageButton,
} from "@/router/login/reset-password/success/_components/serverComponents";

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
