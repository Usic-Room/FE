import { JSX, useState } from "react";
import { FormProvider } from "@/app/(auth)/register/_components/registerForm";

import { VerificationCodeForm } from "@/app/(auth)/register/verification/_components/clientComponents"; // Correct import path

export default {
  title: "Components/Register/Verification/clientComponents", // Updated title for uniqueness
  component: VerificationCodeForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
};

export const DefaultVerificationCodeForm = {
  render: () => <VerificationCodeForm />,
};
