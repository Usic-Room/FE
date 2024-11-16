import { AuthGoogleOauthButtonSC } from "@/app/_components/(auth)/serverComponents/AuthGoogleOauthButtonSC";

import { MoveToResetPasswordPageButtonSC } from "@/app/_components/(auth)/serverComponents/MoveToResetPasswordPageButtonSC";

export default {
  title: "Components/Login/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
  component: MoveToResetPasswordPageButtonSC, // Set the `component` key (could be any default component)
};

export const DefaultGoogleOauthButton = {
  render: () => <AuthGoogleOauthButtonSC buttonSize="w-80" />,
};

export const DefaultMoveToResetPasswordPage = {
  render: () => <MoveToResetPasswordPageButtonSC />,
};
