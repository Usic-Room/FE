import "server-only";
import Link from "next/link";
import ChevronLeft from "@/public/images/chevron-left.svg"; // Correct import path

//// Dynamically import the SpotifyLogo component
//const SpotifyLogo = dynamic(() => import("@/public/images/spotify.svg"), {
//  ssr: true // Enable Server-Side Rendering (true enables SSR, false disables it)
//});

export function RegisterEmailTitleSC() {
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

export function SeperateOtherLoginWaySC() {
  return (
    <div className="w-3/4 sm:w-full flex items-center my-4">
      <hr className="flex-grow border-t border-gray-D9DADC" />
      <span className="px-2 text-black font-bold text-sm">또는</span>
      <hr className="flex-grow border-t border-gray-D9DADC" />
    </div>
  );
}

export function MoveToLoginPageButtonSC() {
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

interface BackToPreviousLevelPageButtonSCProps {
  level: string;
  title: string;
  backURL: string;
}

export function BackToPreviousLevelPageButtonSC({
  level,
  title,
  backURL,
}: BackToPreviousLevelPageButtonSCProps) {
  return (
    <div className="w-full flex items-center mb-8">
      <Link href={backURL ?? "/error"}>
        <button className="text-black p-4">
          <ChevronLeft className="w-7 h-7" alt="Back Arrow"></ChevronLeft>
        </button>
      </Link>
      <div className="flex flex-col">
        <p className="text-lg text-gray-600">{level}/3단계</p>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  );
}

interface ProgessBarAndSectionsSCProps {
  width: string;
}

export function ProgessBarAndSectionsSC({
  width,
}: ProgessBarAndSectionsSCProps) {
  return (
    <div className="w-full mt-4 mb-4">
      <div className="relative h-1 w-full bg-gray-300">
        <div className="h-1 bg-purple-AC25FF" style={{ width }}></div>
      </div>
    </div>
  );
}
