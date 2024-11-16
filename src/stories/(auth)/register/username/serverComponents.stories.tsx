import { RegisterProgessBarAndSectionsSC } from "@/app/_components/(auth)/serverComponents/RegisterProgessBarAndSectionsSC";
import { RegisterBackToPreviousPageButtonSC } from "@/app/_components/(auth)/serverComponents/RegisterBackToPreviousPageButtonSC";

export default {
  title: "Components/Register/Username/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
};

// HeaderSpotifyLogoSC story
export const DefaultProgessBarAndSectionsSC = {
  render: () => <RegisterProgessBarAndSectionsSC width="66%" />,
};

const registerPasswordUrl =
  process.env.NEXT_PUBLIC_REGISTRATION_PASSWORD || "/register/password";

// RegisterEmailTitleSC story
export const DefaultRegisterBackToPreviousPageButtonSC = {
  render: () => (
    <RegisterBackToPreviousPageButtonSC
      level="2"
      title="자신을 소개해주세요"
      backURL={registerPasswordUrl}
    />
  ),
};
