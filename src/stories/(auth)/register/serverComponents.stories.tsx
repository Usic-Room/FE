import {
  RegisterEmailTitleSC,
  SeperateOtherLoginWaySC,
  MoveToLoginPageButtonSC,
} from "@/components/(auth)/register/serverComponents"; // Correct import path

import {
  HeaderSpotifyLogoSC,
  GoogleOauthButtonSC,
} from "@/components/(auth)/serverComponents"; // Correct import path

export default {
  title: "Components/Register/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
  component: HeaderSpotifyLogoSC, // Set the `component` key (could be any default component)
};

// HeaderSpotifyLogoSC story
export const DefaultHeaderSpotifyLogoSC = {
  render: () => <HeaderSpotifyLogoSC />,
};

// RegisterEmailTitleSC story
export const DefaultRegisterEmailTitleSC = {
  render: () => <RegisterEmailTitleSC />,
};

export const RegisterDefaultGoogleOauthButton = {
  render: () => <GoogleOauthButtonSC buttonSize="w/34 sm:w-full" />,
};

// SeperateOtherLoginWaySC story
export const DefaultSeperateOtherLoginWaySC = {
  render: () => <SeperateOtherLoginWaySC />,
};

// MoveToLoginPageButtonSC story
export const DefaultMoveToLoginPageButtonSC = {
  render: () => <MoveToLoginPageButtonSC />,
};
