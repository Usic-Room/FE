import { JSX, useState } from "react";
import { RegisterFormProvider } from "@/contexts/registerFormContext"; // Correct import path

import {
  RegisterPasswordForm,
  PasswordInput,
  PasswordValidationErrors,
  PasswordSubmitButton,
} from "@/auth/register/password/_components/clientComponents"; // Correct import path

import { RegisterPasswordErrorIcon } from "@/public/icons/ErrorIcon";

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
