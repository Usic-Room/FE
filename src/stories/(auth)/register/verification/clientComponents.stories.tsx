import { VerificationCodeForm } from "@/components/(auth)/register/verification/clientComponents";

export default {
  title: "Components/Register/Verification/clientComponents", // Updated title for uniqueness
  component: VerificationCodeForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
};

export const DefaultVerificationCodeForm = {
  render: () => <VerificationCodeForm />,
};
