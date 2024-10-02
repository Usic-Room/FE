import {
  ProgessBarAndSections,
  BackToPreviousLevelPage,
} from "@/app/(auth)/register/password/_components/serverComponents"; // Correct import path

export default {
  title: "Components/Register/Username/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
};

// HeaderSpotifyLogo story
export const DefaultProgessBarAndSections = {
  render: () => <ProgessBarAndSections width="66%" />,
};

const registerPasswordUrl =
  process.env.NEXT_PUBLIC_REGISTRATION_PASSWORD || "/register/password";

// RegisterEmailTitle story
export const DefaultBackToPreviousLevelPage = {
  render: () => (
    <BackToPreviousLevelPage
      level="2"
      title="자신을 소개해주세요"
      backURL={registerPasswordUrl}
    />
  ),
};
