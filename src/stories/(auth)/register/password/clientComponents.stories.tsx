import { JSX, useState } from "react";
import { RegisterFormProvider } from "@/contexts/RegisterFormProvider"; // Correct import path

import { RegisterPasswordForm } from "@/components/(auth)/clientComponents/forms/RegisterPasswordForm";
import { ResetPasswordInputCC } from "@/components/(auth)/clientComponents/ResetPasswordInputCC";

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
    <ResetPasswordInputCC
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
