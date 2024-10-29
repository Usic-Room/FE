import {
  LoginPageTitle,
  LoginPageTitleDivider,
  GoogleOauthButton,
  MoveToResetPasswordPage,
} from "@/components/(auth)/login/serverComponents";
import { LoginForm } from "@/components/(auth)/login/clientComponents";
import { Metadata } from "next";
import { HeaderSpotifyLogo } from "@/components/(auth)/register/serverComponents";

export const metadata: Metadata = {
  title: "Login",
};

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
