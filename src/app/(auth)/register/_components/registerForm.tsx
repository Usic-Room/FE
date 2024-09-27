"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the form context
interface FormContextType {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  username: string;
  setUsername: (username: string) => void;
  isOAuthUser: boolean;
  setIsOAuthUser: (isOAuthUser: boolean) => void;
}

// Create the context with default values
const FormContext = createContext<FormContextType | undefined>(undefined);

// Hook to use the context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used within a FormProvider");
  return context;
};

// Provider component to wrap around the app or pages
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isOAuthUser, setIsOAuthUser] = useState(false); // New field for OAuth user

  return (
    <FormContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername,
        isOAuthUser,
        setIsOAuthUser,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
