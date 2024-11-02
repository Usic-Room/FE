import {
  ProgessBarAndSections,
  BackToPreviousLevelPage,
} from "@/app/_components/(auth)/register/password/serverComponents"; // Correct import path

import { MoveToNextPageFromTermsButton } from "@/app/_components/(auth)/register/terms/serverComponents";

export default {
  title: "Components/Register/Terms/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
};

// HeaderSpotifyLogo story
export const DefaultProgessBarAndSections = {
  render: () => <ProgessBarAndSections width="100%" />,
};

const registerUsernameUrl =
  process.env.NEXT_PUBLIC_REGISTRATION_USERNAME || "/register/username";

// RegisterEmailTitle story
export const DefaultBackToPreviousLevelPage = {
  render: () => (
    <BackToPreviousLevelPage
      level="3"
      title="약관"
      backURL={registerUsernameUrl}
    />
  ),
};

export const DefaultMoveToNextPageFromTermsButton = () => {
  render: () => <MoveToNextPageFromTermsButton />;
};
