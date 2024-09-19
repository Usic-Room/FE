import { LoginPageTitle, LoginPageTitleDivider, GoogleOauthButton,  MoveToResetPasswordPage } from "@/router/login/_components/serverComponents";
import { LoginForm } from "@/app/(router)/login/_components/clientComponents";


import {
  HeaderSpotifyLogo,
} from "@/app/(router)/register/_components/serverComponents";


export default function LoginPage() {

  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <HeaderSpotifyLogo />
      <LoginPageTitle />
      <GoogleOauthButton />
      <LoginPageTitleDivider />
      <LoginForm />
      <MoveToResetPasswordPage />
    </div>
  );
}
