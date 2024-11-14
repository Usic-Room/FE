import { GoogleOauthButtonSC } from "@/app/_components/(auth)/serverComponents";

import { MoveToResetPasswordPageButtonSC } from "@/app/_components/(auth)/login/serverComponents";

export default {
  title: "Components/Login/serverComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
  component: MoveToResetPasswordPageButtonSC, // Set the `component` key (could be any default component)
};

export const DefaultGoogleOauthButton = {
  render: () => <GoogleOauthButtonSC buttonSize="w-80" />,
};

export const DefaultMoveToResetPasswordPage = {
  render: () => <MoveToResetPasswordPageButtonSC />,
};
