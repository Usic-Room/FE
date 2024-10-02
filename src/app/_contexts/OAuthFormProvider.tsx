"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the OAuth form context
interface OAuthFormContextType {
  oauthEmail: string;
  setOAuthEmail: (email: string) => void;
  oauthUsername: string;
  setOAuthUsername: (username: string) => void;
}

// Create the context with default values
const OAuthFormContext = createContext<OAuthFormContextType | undefined>(
  undefined
);

// Hook to use the context
export const useOAuthFormContext = () => {
  const context = useContext(OAuthFormContext);
  if (!context)
    throw new Error(
      "useOAuthFormContext must be used within an OAuthFormProvider"
    );
  return context;
};

// Provider component to wrap around the app or specific pages/components
export const OAuthFormProvider = ({ children }: { children: ReactNode }) => {
  const [oauthEmail, setOAuthEmail] = useState(""); // OAuth user email
  const [oauthUsername, setOAuthUsername] = useState(""); // OAuth username

  return (
    <OAuthFormContext.Provider
      value={{
        oauthEmail,
        setOAuthEmail,
        oauthUsername,
        setOAuthUsername,
      }}
    >
      {children}
    </OAuthFormContext.Provider>
  );
};
