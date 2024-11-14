import React from "react";
import { Metadata } from "next";
import {
  HeaderSpotifyLogo,
  RegisterEmailTitle,
  SeperateOtherLoginWay,
  MoveToLoginPageButton,
} from "@/components/(auth)/register/serverComponents";
import { RegisterEmailForm } from "@/components/(auth)/register/clientComponents"; // Correct import path

import { GoogleOauthButtonSC } from "@/components/(auth)/serverComponents";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterEmail() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogo />
      <RegisterEmailTitle />
      <RegisterEmailForm />
      <SeperateOtherLoginWay />
      <GoogleOauthButtonSC buttonSize="w-3/4 sm:w-full" />
      <MoveToLoginPageButton />
    </div>
  );
}
