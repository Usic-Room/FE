import { RegisterUsernameForm } from "@/app/_components/(auth)/clientComponents/forms/RegisterUsernameForm";

export default {
  title: "Components/Register/Terms/clientComponents", // Updated title for uniqueness
  component: RegisterUsernameForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
};

export const UsernameForm = () => <RegisterUsernameForm />; // Correct component export
