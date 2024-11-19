import { AuthGoogleOauthButtonSC } from "@/app/_components/(auth)/serverComponents/AuthGoogleOauthButtonSC";

import { LoginMoveToResetPasswordPageButtonSC } from "@/app/_components/(auth)/serverComponents/LoginMoveToResetPasswordPageButtonSC";

export default {
  title: "Components/Login/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
  component: LoginMoveToResetPasswordPageButtonSC, // Set the `component` key (could be any default component)
};

export const DefaultGoogleOauthButton = {
  render: () => <AuthGoogleOauthButtonSC buttonSize="w-80" />,
};

export const DefaultMoveToResetPasswordPage = {
  render: () => <LoginMoveToResetPasswordPageButtonSC />,
};
