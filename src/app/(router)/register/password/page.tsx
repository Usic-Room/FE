import {
  ProgessBarAndSections,
  BackToPreviousLevelPage,
} from "@/app/(router)/register/password/_components/serverComponents";
import { RegisterPasswordForm } from "@/app/(router)/register/password/_components/clientcomponents";

import { HeaderSpotifyLogo } from "@/app/(router)/register/_components/serverComponents";

//TODO: 입력필드, 글 div
export default function RegisterPassword() {
  const registerUrl = process.env.NEXT_PUBLIC_REGISTRATION || "/register";
  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white min-h-screen">
      <HeaderSpotifyLogo />
      <ProgessBarAndSections width="33%" />
      <BackToPreviousLevelPage
        level="1"
        title="비밀번호를 만드세요."
        backURL={registerUrl}
      />
      <RegisterPasswordForm />
    </div>
  );
}
