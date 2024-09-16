import {
  EmailInputField,
  SubmitButton,
  RegisterPasswordForm,
  MoveToLoginPageButton,
} from "@/router/register/password/_components/clientComponents"; // Correct import path
import {
  ProgessBarAndSections,
  BackToRegisterEmailPage,
  SeperateOtherLoginWay,
} from "@/router/register/password/_components/serverComponents"; // Correct import path

// Story metadata
export default {
  title: "Components/Forms",
  tags: ["autodocs"], // Enable autodocs
  argTypes: {
    email: { description: "The user's email" },
    setEmail: { action: "setEmail", description: "Function to update email" },
    error: { description: "Error message for invalid email" },
    onClick: { action: "onClick", description: "Submit button handler" },
  },
};

// EmailInputField stories
export const DefaultEmailInputField = {
  args: {
    email: "",
    setEmail: (email: string) => console.log("Email changed:", email),
    error: "",
  },
};

export const ErrorEmailInputField = {
  args: {
    email: "invalid-email",
    setEmail: (email: string) => console.log("Email changed:", email),
    error: "Invalid email address",
  },
};

// SubmitButton stories
export const DefaultSubmitButton = {
  args: {
    label: "Submit",
    onClick: () => console.log("Button clicked"),
  },
};

// GoogleOauthButton stories (if it exists in your project)
export const DefaultGoogleOauthButton = {
  args: {},
};

// MoveToLoginPageButton stories
export const DefaultMoveToLoginPageButton = {
  args: {},
};

// NewButton stories
export const SmallButton = {
  args: {
    size: "small",
    label: "small",
  },
};

export const LargeButton = {
  args: {
    size: "large",
    label: "large",
  },
};
