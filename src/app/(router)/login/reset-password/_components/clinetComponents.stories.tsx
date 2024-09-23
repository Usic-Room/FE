import {
  ResetPasswordForm,
  ConfirmPasswordInput,
} from "@/router/login/reset-password/_components/clientComponents";

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
