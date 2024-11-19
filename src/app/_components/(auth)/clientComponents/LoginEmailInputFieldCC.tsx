interface LoginEmailInputFieldCCProps {
  email: string;
  setEmail: (email: string) => void;
}

// Email Input Field
export function LoginEmailInputFieldCC({
  email,
  setEmail,
}: LoginEmailInputFieldCCProps) {
  return (
    <div className="w-80 mb-4 text-left">
      <label className="block text-sm font-bold mb-2" htmlFor="email">
        이메일
      </label>
      <input
        type="email"
        id="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded"
      />
    </div>
  );
}
