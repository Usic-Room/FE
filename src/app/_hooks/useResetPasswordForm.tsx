import { useState, useEffect } from "react";

export const useResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    length: true,
    uppercase: true,
    specialChar: true,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  useEffect(() => {
    const isLengthValid = password.length >= 10;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const passwordsMatch = confirmPassword === password;

    const newErrorState = {
      length: !isLengthValid,
      uppercase: !hasUppercase,
      specialChar: !hasSpecialChar,
    };
    setError(newErrorState);
    setConfirmError(!passwordsMatch);

    const isValidForm =
      !newErrorState.length &&
      !newErrorState.uppercase &&
      !newErrorState.specialChar &&
      passwordsMatch;
    setIsFormValid(isValidForm);
  }, [password, confirmPassword]);

  const handleSubmit = async () => {
    setSubmitted(true);
    if (isFormValid) {
      // TODO: Handle form submission (e.g., call API)
    }
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    submitted,
    confirmError,
    handleSubmit,
  };
};
