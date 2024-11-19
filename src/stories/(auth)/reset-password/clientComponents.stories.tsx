import { ResetPasswordForm } from "@/app/_components/(auth)/clientComponents/forms/ResetPasswordForm";

import { ResetPasswordConfirmPasswordInputCC } from "@/app/_components/(auth)/clientComponents/ResetPasswordConfirmPasswordInputCC";

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
    <ResetPasswordConfirmPasswordInputCC
      confirmPassword={""}
      setConfirmPassword={(confirmPassword) => {}}
      confirmError={false}
      submitted={false}
    />
  ),
};
