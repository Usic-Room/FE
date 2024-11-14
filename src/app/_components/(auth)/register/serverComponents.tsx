import "server-only";
import dynamic from "next/dynamic";
import Link from "next/link";

import SpotifyIcon from "@/public/images/spotify.svg";

//// Dynamically import the SpotifyLogo component
//const SpotifyLogo = dynamic(() => import("@/public/images/spotify.svg"), {
//  ssr: true // Enable Server-Side Rendering (true enables SSR, false disables it)
//});

export function HeaderSpotifyLogo() {
  return (
    <header className="flex justify-center py-8 bg-white">
      <SpotifyIcon />
    </header>
  );
}

export function RegisterEmailTitle() {
  return (
    <h1 className="text-black text-center font-bold text-[50px] leading-[60px] tracking-[-1.6px] mb-6 ">
      가입하고
      <br />
      원하는 음악을
      <br />
      감상하세요
    </h1>
  );
}

export function SeperateOtherLoginWay() {
  return (
    <div className="w-3/4 sm:w-full flex items-center my-4">
      <hr className="flex-grow border-t border-gray-D9DADC" />
      <span className="px-2 text-black font-bold text-sm">또는</span>
      <hr className="flex-grow border-t border-gray-D9DADC" />
    </div>
  );
}

export function MoveToLoginPageButton() {
  const loginPageUrl = process.env.NEXT_PUBLIC_LOGIN || "/error";
  return (
    <p className="text-black mt-4 font-normal text-sm flex items-center mb-8">
      <span>이미 계정이 있나요?</span>
      <Link href={loginPageUrl} className="text-black underline font-bold ml-1">
        여기에서 로그인하세요
      </Link>
    </p>
  );
}
