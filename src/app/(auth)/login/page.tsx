import {
  LoginPageTitle,
  LoginPageTitleDivider,
  GoogleOauthButton,
  MoveToResetPasswordPage,
} from "@/auth/login/_components/serverComponents";
import { LoginForm } from "@/auth/login/_components/clientComponents";
import { Metadata } from "next";
import { HeaderSpotifyLogo } from "@/auth/register/_components/serverComponents";

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
