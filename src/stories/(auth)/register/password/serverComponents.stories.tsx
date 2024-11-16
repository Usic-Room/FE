import { RegisterProgessBarAndSectionsSC } from "@/app/_components/(auth)/serverComponents/RegisterProgessBarAndSectionsSC";
import { BackToPreviousLevelPageButtonSC } from "@/app/_components/(auth)/serverComponents/BackToPreviousLevelPageButtonSC";

export default {
  title: "Components/Register/Password/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
};

// HeaderSpotifyLogoSC story
export const DefaultProgessBarAndSectionsSC = {
  render: () => <RegisterProgessBarAndSectionsSC width="33%" />,
};

const registerUrl = process.env.NEXT_PUBLIC_REGISTRATION || "/register";

// RegisterEmailTitleSC story
export const DefaultBackToPreviousLevelPageButtonSC = {
  render: () => (
    <BackToPreviousLevelPageButtonSC
      level="1"
      title="비밀번호를 만드세요."
      backURL={registerUrl}
    />
  ),
};
