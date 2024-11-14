import { Metadata } from "next";

import {
  HeaderSpotifyLogoSC,
  GoogleOauthButtonSC,
} from "@/components/(auth)/serverComponents";

import {
  LoginPageTitleSC,
  LoginPageTitleDividerSC,
  MoveToResetPasswordPageButtonSC,
} from "@/components/(auth)/login/serverComponents";
import { LoginForm } from "@/components/(auth)/login/clientComponents";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <HeaderSpotifyLogoSC />
      <LoginPageTitleSC />
      <GoogleOauthButtonSC buttonSize="w-80" />
      <LoginPageTitleDividerSC />
      <LoginForm />
      <MoveToResetPasswordPageButtonSC />
    </div>
  );
}
