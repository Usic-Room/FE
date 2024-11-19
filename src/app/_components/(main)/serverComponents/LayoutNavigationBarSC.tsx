import "server-only";
import Link from "next/link";
import SpotifyWhiteIcon from "@/public/images/spotifyWhite.svg";

import { LayoutNavigationButtonSectionCC } from "@/components/(main)/clientComponents/LayoutNavigationButtonSectionCC";

import { MainSearchBar } from "@/components/(main)/clientComponents/MainNavSearchSectionCC";

export function LayoutNavigationBarSC() {
  return (
    <>
      <div className="hidden sm:block w-full py-2 bg-black ">
        <div className="relative flex items-center justify-between px-4 bg-black h-14">
          {/* Logo - fixed to the left with absolute positioning */}

          <LayoutNavigationLogo />
          {/* Search Bar - flexible, adjusts size based on available space */}
          <MainSearchBar />
          <LayoutNavigationButtonSectionCC />
        </div>
      </div>
    </>
  );
}

function LayoutNavigationLogo() {
  const homeUrl = process.env.NEXT_PUBLIC_MAIN || "/error";

  return (
    <div className="absolute left-4 flex-shrink-0 w-16">
      <Link href={homeUrl}>
        <SpotifyWhiteIcon />
      </Link>
    </div>
  );
}
