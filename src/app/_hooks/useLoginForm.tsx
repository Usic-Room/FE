import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginByEmailAndPassword } from "@/router/login/api/router";

export const useLoginForm = () => {
  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission
  const router = useRouter(); // For page navigation

  const handleLogin = async () => {
    setIsSubmitting(true); // Start loading
    try {
      // API call to authenticate the user
      const response = await LoginByEmailAndPassword(email, password);
      if (response.ok) {
        // Redirect to main page if successful
        router.push("/main");
      } else if (response.status === 409) {
        setErrorMessage("이미 기존 계정과 연결된 주소입니다.");
      } else {
        setErrorMessage("이메일 또는 비밀번호가 잘못되었습니다.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false); // End loading
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    isSubmitting,
    handleLogin,
  };
};
