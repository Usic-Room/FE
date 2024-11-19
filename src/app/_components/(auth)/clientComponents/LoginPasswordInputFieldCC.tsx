import { useState } from "react";

import { ShowPasswordIcon, HidePasswordIcon } from "@/public/icons/ErrorIcon";

interface LoginPasswordInputFieldCCProps {
  password: string;
  setPassword: (password: string) => void;
}

// Password Input Field
export function LoginPasswordInputFieldCC({
  password,
  setPassword,
}: LoginPasswordInputFieldCCProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-80 mb-4">
      <p className="mb-2 font-bold text-sm">비밀번호</p>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </button>
      </div>
    </div>
  );
}
