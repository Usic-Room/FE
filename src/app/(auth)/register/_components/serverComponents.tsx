import "server-only";
import dynamic from "next/dynamic";
import Link from "next/link";
import GoogleIcon from "@/public/images/google-24.svg";
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

export function GoogleOauthButton() {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI;
  const scope = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_SCOPE;
  const oauthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

  return (
    <Link
      href={oauthUrl}
      className="w-full p-3 mb-4 flex items-center justify-center border border-gray-878787 rounded-full hover:border-black"
    >
      <GoogleIcon className="w-5 h-4 mr-2" alt="Google Icon" />
      <span className="font-normal text-gray-700">Continue with Google</span>
    </Link>
  );
}


export function SeperateOtherLoginWay() {
  return (
    <div className="w-full flex items-center my-4">
      <hr className="flex-grow border-t border-gray-D9DADC" />
      <span className="px-2 text-black font-bold text-sm">또는</span>
      <hr className="flex-grow border-t border-gray-D9DADC" />
    </div>
  );
}

export function MoveToLoginPageButton() {
  const loginPageUrl = process.env.NEXT_PUBLIC_LOGIN_URL;
  return (
    <p className="text-black mt-4 font-normal text-sm flex items-center">
      <span>이미 계정이 있나요?</span>
      <Link href={loginPageUrl!} className="text-black underline font-bold ml-1">
        여기에서 로그인하세요
      </Link>
    </p>
  );
}
