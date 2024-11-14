import {
  ProgessBarAndSectionsSC,
  BackToPreviousLevelPageButtonSC,
} from "@/components/(auth)/register/serverComponents"; // Correct import path

export default {
  title: "Components/Register/Username/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
};

// HeaderSpotifyLogoSC story
export const DefaultProgessBarAndSectionsSC = {
  render: () => <ProgessBarAndSectionsSC width="66%" />,
};

const registerPasswordUrl =
  process.env.NEXT_PUBLIC_REGISTRATION_PASSWORD || "/register/password";

// RegisterEmailTitleSC story
export const DefaultBackToPreviousLevelPageButtonSC = {
  render: () => (
    <BackToPreviousLevelPageButtonSC
      level="2"
      title="자신을 소개해주세요"
      backURL={registerPasswordUrl}
    />
  ),
};
