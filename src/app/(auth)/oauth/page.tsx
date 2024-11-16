import { AuthHeaderSpotifyLogoSC } from "@/app/_components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";

import { OAuthLoadingAnimationCC } from "@/components/(auth)/clientComponents/OAuthLoadingAnimationCC";
import { OAuthPageDescriptionSC } from "@/components/(auth)/serverComponents/OAuthPageDescriptionSC";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OAuth",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <AuthHeaderSpotifyLogoSC />
      <OAuthLoadingAnimationCC />
      <OAuthPageDescriptionSC />
    </div>
  );
}
