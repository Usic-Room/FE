"use client";

interface RegisterVerificationSubmitButtonCCProps {
  isCodeValid: boolean;
  handleSubmit: () => void;
}

export function RegisterVerificationSubmitButtonCC({
  isCodeValid,
  handleSubmit,
}: RegisterVerificationSubmitButtonCCProps) {
  return (
    <button
      onClick={handleSubmit}
      className={`w-full p-3 mt-20 ${
        isCodeValid
          ? "bg-purple-AC25FF hover:bg-[#ac44ff]"
          : "bg-gray-400 cursor-not-allowed"
      } text-white rounded-full font-normal`}
      disabled={!isCodeValid}
    >
      확인
    </button>
  );
}
