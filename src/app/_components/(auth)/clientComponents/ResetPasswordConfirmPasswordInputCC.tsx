import { useConfirmPasswordVisibility } from "@/hooks/useConfirmPasswordVisibility";

import { ShowPasswordIcon, HidePasswordIcon } from "@/public/icons/ErrorIcon";

interface ResetPasswordConfirmPasswordInputCCProps {
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  confirmError: boolean;
  submitted: boolean;
}

export function ResetPasswordConfirmPasswordInputCC({
  confirmPassword,
  setConfirmPassword,
  confirmError,
  submitted,
}: ResetPasswordConfirmPasswordInputCCProps) {
  const { showConfirmPassword, toggleConfirmPasswordVisibility } =
    useConfirmPasswordVisibility();

  return (
    <div className="mb-4">
      <p className="mb-2 font-bold text-sm">새로운 비밀번호 확인하기</p>
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="새로운 비밀번호 확인"
          className={`w-full border ${
            submitted && confirmError ? "border-red-500" : "border-gray-300"
          } p-4 rounded`}
        />
        <button
          type="button"
          onClick={toggleConfirmPasswordVisibility}
          className="absolute inset-y-0 right-3 flex items-center"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          {showConfirmPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </button>
      </div>
      {submitted && confirmError && (
        <p className="text-red-500 text-xs mt-1">
          비밀번호가 일치하지 않습니다.
        </p>
      )}
    </div>
  );
}
