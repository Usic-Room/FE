import { useState, useEffect } from "react";
import { useFormContext } from "@/app/_contexts/RegisterFormProvider";

// Regular expression for username verification (minimum 3 characters)
const userRegisterUsernameRegex = /^.{3,}$/;

export const useRegisterUsernameForm = () => {
  const { username, setUsername } = useFormContext(); // Use context for global state management
  const [error, setError] = useState({
    empty: true,
    invalid: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  // Validate the username input
  useEffect(() => {
    const trimmedUsername = username.trim();
    const isEmpty = !trimmedUsername;
    const isInvalid = !userRegisterUsernameRegex.test(trimmedUsername);

    const newErrorState = {
      empty: isEmpty,
      invalid: isInvalid && !isEmpty,
    };

    setError(newErrorState);

    // Determine if the form is valid
    const isValidForm = !newErrorState.empty && !newErrorState.invalid;
    setIsUsernameValid(isValidForm);
  }, [username]);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return {
    username,
    setUsername,
    error,
    submitted,
    isUsernameValid,
    handleSubmit,
  };
};
