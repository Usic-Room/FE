import {
  HeaderSpotifyLogo,
  RegisterEmailTitle,
  GoogleOauthButton,
  SeperateOtherLoginWay,
  MoveToLoginPageButton,
} from "@/app/(auth)/register/_components/serverComponents"; // Correct import path

export default {
  title: "Components/Register/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
  component: HeaderSpotifyLogo, // Set the `component` key (could be any default component)
};

// HeaderSpotifyLogo story
export const DefaultHeaderSpotifyLogo = {
  render: () => <HeaderSpotifyLogo />,
};

// RegisterEmailTitle story
export const DefaultRegisterEmailTitle = {
  render: () => <RegisterEmailTitle />,
};

export const RegisterDefaultGoogleOauthButton = {
  render: () => <GoogleOauthButton />,
};

// SeperateOtherLoginWay story
export const DefaultSeperateOtherLoginWay = {
  render: () => <SeperateOtherLoginWay />,
};

// MoveToLoginPageButton story
export const DefaultMoveToLoginPageButton = {
  render: () => <MoveToLoginPageButton />,
};
