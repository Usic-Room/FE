import { LoginForm } from "@/components/(auth)/clientComponents/forms/LoginForm";

import { LoginSubmitButtonCC } from "@/components/(auth)/clientComponents/LoginSubmitButtonCC";

export default {
  title: "Components/Login/clientComponents", // Updated title for uniqueness
  tags: ["autodocs"], // Enable automatic documentation
  component: LoginForm, // Set the `component` key (could be any default component)
};

export const DefaultLoginForm = {
  render: () => <LoginForm />,
};

//export const LoginSubmittingButton = {
//  render: () => (
//    <LoginSubmitButtonCC handleSubmit={() => {}} isSubmitting={true} />
//  ),
//};

//export const DefaultLoginSubmitButtonCC = {
//  render: () => (
//    <LoginSubmitButtonCC handleSubmit={() => {}} isSubmitting={false} />
//  ),
//};
