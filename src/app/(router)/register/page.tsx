import React from "react";
import {
  HeaderSpotifyLogo,
  RegisterEmailTitle,
  GoogleOauthButton,
  SeperateOtherLoginWay,
  MoveToLoginPageButton,
} from "@/app/(router)/register/_components/serverComponents";
import { RegisterEmailForm } from "@/app/(router)/register/_components/clientComponents"; // Correct import path

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
