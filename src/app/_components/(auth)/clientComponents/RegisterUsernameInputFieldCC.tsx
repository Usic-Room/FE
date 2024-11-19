import { useFormContext } from "@/app/_contexts/RegisterFormProvider";

interface RegisterUsernameInputFieldCCProps {
  error: { empty: boolean; invalid: boolean };
  submitted: boolean;
}

// Username input field component
export function RegisterUsernameInputFieldCC({
  error,
  submitted,
}: RegisterUsernameInputFieldCCProps) {
  const { username, setUsername } = useFormContext(); // Use context to get/set username

  return (
    <div className="w-full text-left">
      <p className="mb-2 font-bold text-sm">이름</p>
      <p className="mb-2 text-sm">이 이름이 프로필에 표시됩니다.</p>
      <input
        type="text"
        placeholder="이름"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Update context state
        className={`w-full p-3 mb-3 ${
          submitted && (error.empty || error.invalid)
            ? "border-red-500"
            : "border-gray-400"
        } border rounded font-normal`}
      />
      {submitted && error.empty && (
        <p className="text-red-500 text-xs mb-1">이름을 입력해 주세요.</p>
      )}
      {submitted && error.invalid && (
        <p className="text-red-500 text-xs mb-1">
          이름은 최소 3자 이상이어야 합니다.
        </p>
      )}
    </div>
  );
}
