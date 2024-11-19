import { useState, useEffect } from "react";
import { useFormContext } from "@/app/_contexts/RegisterFormProvider";

export const useRegisterPasswordForm = () => {
  const { password, setPassword, isOAuthUser } = useFormContext(); // Context
  const [error, setError] = useState({
    length: true,
    uppercase: true,
    specialChar: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isLengthValid = password.length >= 10;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    const newErrorState = {
      length: !isLengthValid,
      uppercase: !hasUppercase,
      specialChar: !hasSpecialChar,
    };

    setError(newErrorState);

    const isValidForm =
      !newErrorState.length &&
      !newErrorState.uppercase &&
      !newErrorState.specialChar &&
      !isOAuthUser;

    setIsFormValid(isValidForm);
  }, [password, isOAuthUser]);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return {
    password,
    setPassword,
    error,
    submitted,
    isFormValid,
    handleSubmit,
  };
};
