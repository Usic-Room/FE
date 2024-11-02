import { useState } from "react";
import { useCookies } from "next-client-cookies";

export const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const cookies = useCookies();
  const accessToken = cookies.get("accessToken") ?? ""; // TODO: 이름 수정필요

  const handleIsLogin = () => {
    accessToken ? setIsLogin(true) : setIsLogin(false);
  };

  return {
    isLogin,
    handleIsLogin,
  };
};
