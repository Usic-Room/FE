import { RegisterVerificationCodeForm } from "@/app/_components/(auth)/clientComponents/forms/RegisterVerificationCodeForm";

export default {
  title: "Components/Register/Verification/clientComponents", // Updated title for uniqueness
  component: RegisterVerificationCodeForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
};

export const DefaultRegisterVerificationCodeForm = {
  render: () => <RegisterVerificationCodeForm />,
};
