import {
  ProgessBarAndSectionsSC,
  BackToPreviousLevelPageButtonSC,
} from "@/components/(auth)/register/serverComponents";
import { RegisterPasswordForm } from "@/app/_components/(auth)/register/password/clientComponents";
import { HeaderSpotifyLogoSC } from "@/components/(auth)/serverComponents";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Password",
};

//TODO: 입력필드, 글 div
export default function RegisterPassword() {
  const registerUrl = process.env.NEXT_PUBLIC_REGISTRATION || "/register";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <HeaderSpotifyLogoSC />
      <ProgessBarAndSectionsSC width="33%" />
      <BackToPreviousLevelPageButtonSC
        level="1"
        title="비밀번호를 만드세요."
        backURL={registerUrl}
      />
      <RegisterPasswordForm />
    </div>
  );
}
