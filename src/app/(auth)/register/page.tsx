import React from "react";
import { Metadata } from "next";
import {
  HeaderSpotifyLogo,
  RegisterEmailTitle,
  GoogleOauthButton,
  SeperateOtherLoginWay,
  MoveToLoginPageButton,
} from "@/auth/register/_components/serverComponents";
import { RegisterEmailForm } from "@/auth/register/_components/clientComponents"; // Correct import path

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
      <GoogleOauthButton />
      <MoveToLoginPageButton />
    </div>
  );
}
