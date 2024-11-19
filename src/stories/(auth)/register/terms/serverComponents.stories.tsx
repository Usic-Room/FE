import { RegisterProgessBarAndSectionsSC } from "@/app/_components/(auth)/serverComponents/RegisterProgessBarAndSectionsSC";
import { RegisterBackToPreviousPageButtonSC } from "@/app/_components/(auth)/serverComponents/RegisterBackToPreviousPageButtonSC";

import { RegisterMoveToNextPageFromTermsButtonSC } from "@/app/_components/(auth)/serverComponents/RegisterMoveToNextPageFromTermsButtonSC";

export default {
  title: "Components/Register/Terms/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
};

// HeaderSpotifyLogoSC story
export const DefaultRegisterProgessBarAndSectionsSC = {
  render: () => <RegisterProgessBarAndSectionsSC width="100%" />,
};

const registerUsernameUrl =
  process.env.NEXT_PUBLIC_REGISTRATION_USERNAME || "/register/username";

// RegisterEmailTitleSC story
export const DefaultRegisterBackToPreviousPageButtonSC = {
  render: () => (
    <RegisterBackToPreviousPageButtonSC
      level="3"
      title="약관"
      backURL={registerUsernameUrl}
    />
  ),
};

export const DefaultMoveToNextPageFromTermsButton = () => {
  render: () => <RegisterMoveToNextPageFromTermsButtonSC />;
};
