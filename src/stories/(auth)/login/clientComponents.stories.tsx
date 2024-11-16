import {
  LoginForm,
  LoginSubmitButtonCC,
} from "@/app/_components/(auth)/clientComponents/LoginForm";

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
