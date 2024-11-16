import { RegisterEmailTitleSC } from "@/components/(auth)/serverComponents/RegisterEmailTitleSC";
import { RegisterSeperateOtherLoginWaySC } from "@/components/(auth)/serverComponents/RegisterSeperateOtherLoginWaySC";
import { RegisterMoveToLoginPageButtonSC } from "@/app/_components/(auth)/serverComponents/RegisterMoveToLoginPageButtonSC";

import { AuthHeaderSpotifyLogoSC } from "@/app/_components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { AuthGoogleOauthButtonSC } from "@/app/_components/(auth)/serverComponents/AuthGoogleOauthButtonSC";

export default {
  title: "Components/Register/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
  component: AuthHeaderSpotifyLogoSC, // Set the `component` key (could be any default component)
};

// HeaderSpotifyLogoSC story
export const DefaultHeaderSpotifyLogoSC = {
  render: () => <AuthHeaderSpotifyLogoSC />,
};

// RegisterEmailTitleSC story
export const DefaultRegisterEmailTitleSC = {
  render: () => <RegisterEmailTitleSC />,
};

export const RegisterDefaultGoogleOauthButton = {
  render: () => <AuthGoogleOauthButtonSC buttonSize="w/34 sm:w-full" />,
};

// SeperateOtherLoginWaySC story
export const DefaultSeperateOtherLoginWaySC = {
  render: () => <RegisterSeperateOtherLoginWaySC />,
};

// MoveToLoginPageButtonSC story
export const DefaultMoveToLoginPageButtonSC = {
  render: () => <RegisterMoveToLoginPageButtonSC />,
};
