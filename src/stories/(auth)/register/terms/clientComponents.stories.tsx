import { RegisterUsernameForm } from "@/auth/register/username/_components/clientComponents"; // Correct import path

export default {
  title: "Components/Register/Terms/clientComponents", // Updated title for uniqueness
  component: RegisterUsernameForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
};

export const UsernameForm = () => <RegisterUsernameForm />; // Correct component export
