import React from "react";

interface EmailInputFieldProps {
  email: string;
  setEmail: (email: string) => void;
  error: string;
}

export function EmailInputField({
  email,
  setEmail,
  error,
}: EmailInputFieldProps) {
  return (
    <div className="w-full text-left mt-14">
      <p className="mb-2 font-bold text-sm ">이메일 주소</p>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-full p-3 mb-3 ${error ? "mb-1 border-red-500" : "mb-4 border-gray-400"} border rounded font-normal font-pretendard`}
      />
      {error && <p className="text-red-500 text-xs mb-1">{error}</p>}
    </div>
  );
}

//export default { NewButton, EmailInputField };
