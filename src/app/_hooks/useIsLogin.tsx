import { useState } from "react";

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleIsLogin = () => {
    setIsLogin(true);
  };

  return {
    isLogin,
    handleIsLogin,
  };
};
