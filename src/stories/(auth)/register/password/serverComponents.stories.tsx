import {
  ProgessBarAndSections,
  BackToPreviousLevelPage,
} from "@/components/(auth)/register/password/serverComponents"; // Correct import path

export default {
  title: "Components/Register/Password/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
};

// HeaderSpotifyLogo story
export const DefaultProgessBarAndSections = {
  render: () => <ProgessBarAndSections width="33%" />,
};

const registerUrl = process.env.NEXT_PUBLIC_REGISTRATION || "/register";

// RegisterEmailTitle story
export const DefaultBackToPreviousLevelPage = {
  render: () => (
    <BackToPreviousLevelPage
      level="1"
      title="비밀번호를 만드세요."
      backURL={registerUrl}
    />
  ),
};
