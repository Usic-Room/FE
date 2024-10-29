import {
  ResetPasswordForm,
  ConfirmPasswordInput,
} from "@/components/(auth)/login/reset-password/clientComponents";

export default {
  title: "Components/Login/ResetPassword/clientComponents",
  tags: ["autodocs"],
  component: ResetPasswordForm,
};

export const DefaultResetPasswordForm = {
  render: () => <ResetPasswordForm />,
};

export const DefaultConfirmPasswordInput = {
  render: () => (
    <ConfirmPasswordInput
      confirmPassword={""}
      setConfirmPassword={(confirmPassword) => {}}
      confirmError={false}
      submitted={false}
    />
  ),
};
