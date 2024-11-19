import { useFormContext } from "@/app/_contexts/RegisterFormProvider";

interface RegisterEmailInputFieldCCProps {
  error: { empty: boolean; invalid: boolean };
  submitted: boolean;
}

export function RegisterEmailInputFieldCC({
  error,
  submitted,
}: RegisterEmailInputFieldCCProps) {
  const { email, setEmail } = useFormContext(); // Use context to get/set email
  return (
    <div className="w-full text-left mt-14">
      <p className="mb-2 font-bold text-sm">이메일 주소</p>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update context state
        className={`w-full p-3 mb-3 ${
          submitted && (error.empty || error.invalid)
            ? "border-red-500"
            : "border-gray-400"
        } border rounded font-normal`}
      />
      {submitted && error.empty && (
        <p className="text-red-500 text-xs mb-1">이메일을 입력해 주세요.</p>
      )}
      {submitted && error.invalid && (
        <p className="text-red-500 text-xs mb-1">
          올바른 이메일 형식을 입력해 주세요.
        </p>
      )}
    </div>
  );
}
