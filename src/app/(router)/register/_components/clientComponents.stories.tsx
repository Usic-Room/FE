import { EmailInputField } from "@/router/register/_components/clientComponents"; // Correct import path

import Link from "next/link";

// Metadata configuration for the stories
export default {
  title: "Components/Register/clientComponents", // Updated title for uniqueness
  component: EmailInputField, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
  argTypes: {
    email: {
      description: "The user's email input",
    },
    error: {
      description: "Error message to display",
    },
    onClick: {
      description: "Button click handler",
    },
    label: {
      description: "Button label",
    },
  },
};

// EmailInputField stories
export const RegisterDefaultEmailInputField = {
  args: {
    email: "",
    setEmail: (email: string) => console.log("Email changed:", email),
    error: "",
  },
};

export const RegisterErrorEmailInputField = {
  args: {
    email: "invalid-email",
    setEmail: (email: string) => console.log("Email changed:", email),
    error: "Invalid email address",
  },
};

interface SubmitButtonStoryProps {
  email: string;
}

export function EmailSubmitStoryButton({ email }: SubmitButtonStoryProps) {
  const registrationUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_PASSWORD || "/error";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // If the email is valid, return a <Link> to the next step
  if (emailRegex.test(email)) {
    return (
      <button className="w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff]">
        <Link href={registrationUrl}>다음 단계로 이동</Link>
      </button>
    );
  }

  // If the email is invalid, return a disabled <button>
  return (
    <button
      disabled
      className="w-full p-3 mb-4 bg-gray-400 text-white rounded-full cursor-not-allowed"
    >
      다음 단계로 이동
    </button>
  );
}

// GoogleOauthButton stories
//export const RegisterDefaultGoogleOauthButton = {
//  render: () => <GoogleOauthButton />,
//};

// MoveToLoginPageButton stories
//export const RegisterDefaultMoveToLoginPageButton = {
//  render: () => <MoveToLoginPageButton />,
//};
