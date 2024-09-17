


import { GoogleOauthButton } from "@/router/login/_components/serverComponents";

import { Divider, MoveToResetPasswordPage } from "@/router/login/_components/serverComponents";

import { LoginForm } from "@/app/(router)/login/_components/clientComponents";


import {
  HeaderSpotifyLogo,
} from "@/app/(router)/register/_components/serverComponents";



export default function LoginPage() {

  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <HeaderSpotifyLogo />
      <h1 className="text-2xl font-bold mb-6 mt-3">Spotify에 로그인하기</h1>

      <GoogleOauthButton />

      {/* Divider */}
      <Divider />
      
      
      <LoginForm />
     

      {/* Login Button */}


      {/* Forgot Password Link */}
      <MoveToResetPasswordPage />
    </div>
  );
}
