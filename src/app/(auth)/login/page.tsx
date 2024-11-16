import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { AuthGoogleOauthButtonSC } from "@/components/(auth)/serverComponents/AuthGoogleOauthButtonSC";
import { LoginPageTitleSC } from "@/components/(auth)/serverComponents/LoginPageTitleSC";
import { LoginPageTitleDividerSC } from "@/components/(auth)/serverComponents/LoginPageTitileDividerSC";
import { LoginMoveToResetPasswordPageButtonSC } from "@/app/_components/(auth)/serverComponents/LoginMoveToResetPasswordPageButtonSC";

import { LoginForm } from "@/components/(auth)/clientComponents/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <AuthHeaderSpotifyLogoSC />
      <LoginPageTitleSC />
      <AuthGoogleOauthButtonSC buttonSize="w-80" />
      <LoginPageTitleDividerSC />
      <LoginForm />
      <LoginMoveToResetPasswordPageButtonSC />
    </div>
  );
}
