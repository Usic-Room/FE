import { JSX, useState } from "react";
import { RegisterPasswordForm } from "@/app/(auth)/register/password/_components/clientComponents"; // Correct import path
import { FormProvider } from "@/app/(auth)/register/_components/registerForm";

import {
  PasswordInput,
  PasswordValidationErrors,
  PasswordSubmitButton,
} from "@/app/(auth)/register/password/_components/clientComponents"; // Correct import path

import { RegisterPasswordErrorIcon } from "@/public/icons/ErrorIcon";

export default {
  title: "Components/Register/Password/clientComponents", // Updated title for uniqueness
  component: RegisterPasswordForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
  decorators: [
    (Story: React.FC) => (
      <FormProvider>
        <Story />
      </FormProvider>
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
    setPassword: () => { },
    error: {
      length: true,
      uppercase: true,
      specialChar: true,
    },
    submitted: false,
  },
};
