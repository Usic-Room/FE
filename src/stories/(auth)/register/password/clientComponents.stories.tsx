import { JSX, useState } from "react";
import { RegisterFormProvider } from "@/app/_contexts/RegisterFormContext"; // Correct import path

import { RegisterPasswordForm } from "@/app/_components/(auth)/clientComponents/RegisterPasswordForm";
import { PasswordInput } from "@/app/_components/(auth)/clientComponents/ResetPasswordForm";

export default {
  title: "Components/Register/Password/clientComponents", // Updated title for uniqueness
  component: RegisterPasswordForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
  decorators: [
    (Story: React.FC) => (
      <RegisterFormProvider>
        <Story />
      </RegisterFormProvider>
    ),
  ],
};

export const DefaultRegisterPasswordForm = {
  render: () => <RegisterPasswordForm />,
};

export const DefaultPasswordInput = {
  render: () => (
    <PasswordInput
      password={""}
      setPassword={function (password: string): void {
        throw new Error("Function not implemented.");
      }}
      error={{
        length: false,
        uppercase: false,
        specialChar: false,
      }}
      submitted={false}
    />
  ),
  args: {
    password: "password",
    setPassword: () => {},
    error: {
      length: true,
      uppercase: true,
      specialChar: true,
    },
    submitted: false,
  },
};
