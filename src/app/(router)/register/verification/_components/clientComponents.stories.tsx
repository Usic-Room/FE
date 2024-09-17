import { JSX, useState } from "react";
import { FormProvider } from "@/app/(router)/register/_components/registerForm";

import { RegisterUsernameForm } from "@/app/(router)/register/username/_components/clientComponents"; // Correct import path

export default {
  title: "Components/Register/Terms/clientComponents", // Updated title for uniqueness
  component: RegisterUsernameForm, // Specify the main component used for this set of stories
  tags: ["autodocs"], // Enable automatic documentation
};
