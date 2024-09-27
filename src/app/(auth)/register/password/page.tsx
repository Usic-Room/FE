import {
  ProgessBarAndSections,
  BackToPreviousLevelPage,
} from "@/app/(auth)/register/password/_components/serverComponents";
import { RegisterPasswordForm } from "@/app/(auth)/register/password/_components/clientComponents";
import { Metadata } from "next";
import { HeaderSpotifyLogo } from "@/app/(auth)/register/_components/serverComponents";

export const metadata: Metadata = {
  title: "Password",
};

//TODO: 입력필드, 글 div
export default function RegisterPassword() {
  const registerUrl = process.env.NEXT_PUBLIC_REGISTRATION || "/register";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <HeaderSpotifyLogo />
      <ProgessBarAndSections width="33%" />
      <BackToPreviousLevelPage level="1" title="비밀번호를 만드세요." backURL={registerUrl} />
      <RegisterPasswordForm />
    </div>
  );
}
