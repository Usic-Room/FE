// hooks/useRegisterEmailForm.ts
import { useState, useEffect } from "react";
import { useFormContext } from "@/app/_contexts/RegisterFormProvider";

// Regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const useRegisterEmailForm = () => {
  const { email, setEmail } = useFormContext(); // Use context to manage email state
  const [error, setError] = useState({
    empty: true,
    invalid: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Validate the email input
  useEffect(() => {
    const trimmedEmail = email.trim();
    const isEmpty = !trimmedEmail;
    const isInvalid = !emailRegex.test(trimmedEmail);
    const newErrorState = {
      empty: isEmpty,
      invalid: isInvalid && !isEmpty,
    };
    setError(newErrorState);
    // Set form validity
    const isValidForm = !newErrorState.empty && !newErrorState.invalid;
    setIsEmailValid(isValidForm);
  }, [email]);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return {
    email,
    setEmail,
    error,
    submitted,
    isEmailValid,
    handleSubmit,
  };
};
