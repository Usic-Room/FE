import { useState } from "react";
import { RegisterEmailForm } from "@/router/register/_components/clientComponents"; // Correct import path
import { RegisterFormProvider } from "@/contexts/registerFormContext"; // Correct import path
import Link from "next/link";

// Regular expression for email verification
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default {
  title: "Components/Register/clientComponents", // Updated title for uniqueness
  component: RegisterEmailForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
  argTypes: {
    email: {
      description: "The user's email input",
      control: "text", // Control type for Storybook
    },
    error: {
      description: "Error message to display",
    },
  },
  decorators: [
    (Story: React.FC) => (
      <RegisterFormProvider>
        <Story />
      </RegisterFormProvider>
    ),
  ],
};

export const EmailInputFieldStory = {
  render: () => <RegisterEmailForm />,
};
