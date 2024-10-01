// hooks/useConfirmPasswordVisibility.ts
import { useState } from "react";

export const useConfirmPasswordVisibility = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return {
    showConfirmPassword,
    toggleConfirmPasswordVisibility,
  };
};
