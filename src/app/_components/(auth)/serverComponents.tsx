import Link from "next/link";
import GoogleIcon from "@/public/images/google-24.svg";

interface AuthLinkButtonSCProps {
  href: string;
  buttonDescription: string;
}

export function AuthLinkButtonSC({
  href,
  buttonDescription,
}: AuthLinkButtonSCProps) {
  return (
    <Link href={href}>
      <button className="w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal">
        {buttonDescription}
      </button>
    </Link>
  );
}

interface GoogleOauthButtonSCProps {
  buttonSize: string;
}

export function GoogleOauthButtonSC({ buttonSize }: GoogleOauthButtonSCProps) {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI;
  const scope = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_SCOPE;
  const oauthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

  return (
    //<Link
    //  href={oauthUrl}
    //  className="w-3/4 sm:w-full p-3 mb-4 flex items-center justify-center border border-gray-878787 rounded-full hover:border-black"
    //>
    <Link
      href={oauthUrl}
      className={`${buttonSize} p-3 mb-4 flex items-center justify-center border border-gray-878787 rounded-full hover:border-black`}
    >
      <GoogleIcon className="w-5 h-4 mr-2" alt="Google Icon" />
      <span className="font-normal text-gray-700">Continue with Google</span>
    </Link>
  );
}
