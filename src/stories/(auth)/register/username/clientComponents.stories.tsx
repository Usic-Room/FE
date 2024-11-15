import { JSX, useState } from "react";
import { RegisterFormProvider } from "@/app/_contexts/RegisterFormContext"; // Correct import path

import { RegisterUsernameForm } from "@/app/_components/(auth)/register/username/clientComponents";

export default {
  title: "Components/Register/Username/clientComponents", // Updated title for uniqueness
  component: RegisterUsernameForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
  decorators: [
    (Story: React.FC) => (
      <RegisterFormProvider>
        <Story />
      </RegisterFormProvider>
    ),
  ],
};

export const DefaultRegisterUsernameForm = {
  render: () => <RegisterUsernameForm />,
};
