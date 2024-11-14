import { HeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents";

import { OAuthLodingAnimationCC } from "@/components/(auth)/oauth/clientComponents";
import { OAuthPageDescriptionSC } from "@/components/(auth)/oauth/serverComponents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OAuth",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <HeaderSpotifyLogoSC />
      <OAuthLodingAnimationCC />
      <OAuthPageDescriptionSC />
    </div>
  );
}
