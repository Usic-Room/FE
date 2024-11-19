interface ResetPasswordValidationErrorsCCProps {
  error: { length: boolean; uppercase: boolean; specialChar: boolean };
  submitted: boolean;
  getErrorIcon: (conditionMet: boolean) => JSX.Element;
}

export function ResetPasswordValidationErrorsCC({
  error,
  submitted,
  getErrorIcon,
}: ResetPasswordValidationErrorsCCProps) {
  return (
    <div className="w-full mb-8">
      <p className="text-sm mb-2 font-bold">
        비밀번호에는 다음 문자가 반드시 포함되어야 합니다:
      </p>
      <div className="text-xs">
        <label
          className={`flex items-center mb-2 ${
            submitted && error.length ? "text-red-500" : "text-black"
          }`}
        >
          {getErrorIcon(!error.length)} <span className="ml-2">10자 이상</span>
        </label>
        <label
          className={`flex items-center mb-2 ${
            submitted && error.uppercase ? "text-red-500" : "text-black"
          }`}
        >
          {getErrorIcon(!error.uppercase)}{" "}
          <span className="ml-2">영어 대문자 1개 이상</span>
        </label>
        <label
          className={`flex items-center mb-2 ${
            submitted && error.specialChar ? "text-red-500" : "text-black"
          }`}
        >
          {getErrorIcon(!error.specialChar)}{" "}
          <span className="ml-2">특수문자 1개 이상 (예: !@#$%^&*)</span>
        </label>
      </div>
    </div>
  );
}
