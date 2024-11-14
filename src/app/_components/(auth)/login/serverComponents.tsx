import "server-only";
import GoogleIcon from "@/public/images/google-24.svg"; // Correct import path
import Link from "next/link";

export function LoginPageTitleSC() {
  return <h1 className="text-2xl font-bold mb-6 mt-3">Spotify에 로그인하기</h1>;
}

export function LoginPageTitleDividerSC() {
  return <div className="w-80 border-t border-gray-300 mb-6 mt-6"></div>;
}

//export function GoogleOauthButton() {
//  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID;
//  const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI;
//  const scope = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_SCOPE;
//  const oauthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

//  return (
//    <Link
//      href={oauthUrl}
//      className="w-80 p-3 mb-4 flex items-center justify-center border border-gray-878787 rounded-full hover:border-black"
//    >
//      <GoogleIcon className="w-5 h-4 mr-2" alt="Google Icon" />
//      <span className="font-normal text-gray-700">Continue with Google</span>
//    </Link>
//  );
//}

export function MoveToResetPasswordPageButtonSC() {
  const resetPasswordUrl =
    process.env.NEXT_PUBLIC_RESET_PASSWORD_EMAIL || "/login/reset-password";

  return (
    <Link href={resetPasswordUrl} className="text-sm font-normal underline">
      비밀번호를 잊었나요?
    </Link>
  );
}
