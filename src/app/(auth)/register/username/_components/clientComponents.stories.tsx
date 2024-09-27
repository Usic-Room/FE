import { JSX, useState } from "react";
import { FormProvider } from "@/app/(auth)/register/_components/registerForm";

import { RegisterUsernameForm } from "@/app/(auth)/register/username/_components/clientComponents"; // Correct import path

export default {
  title: "Components/Register/Username/clientComponents", // Updated title for uniqueness
  component: RegisterUsernameForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
  decorators: [
    (Story: React.FC) => (
      <FormProvider>
        <Story />
      </FormProvider>
    ),
  ],
};

export const DefaultRegisterUsernameForm = {
  render: () => <RegisterUsernameForm />,
};
