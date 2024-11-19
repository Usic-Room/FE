import { usePasswordVisibility } from "@/app/_hooks/usePasswordVisibility";

import { ShowPasswordIcon, HidePasswordIcon } from "@/public/icons/ErrorIcon";

interface ResetPasswordInputCCProps {
  password: string;
  setPassword: (password: string) => void;
  error: { length: boolean; uppercase: boolean; specialChar: boolean };
  submitted: boolean;
}

export function ResetPasswordInputCC({
  password,
  setPassword,
  error,
  submitted,
}: ResetPasswordInputCCProps) {
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility();

  return (
    <div className="w-full mb-4">
      <p className="mb-2 font-bold text-sm">비밀번호</p>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className={`w-full border ${
            submitted && (error.length || error.uppercase || error.specialChar)
              ? "border-red-500"
              : "border-gray-300"
          } p-4 rounded`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-3 flex items-center"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          {showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </button>
      </div>
    </div>
  );
}
