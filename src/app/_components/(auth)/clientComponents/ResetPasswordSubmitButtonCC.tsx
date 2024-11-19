interface ResetPasswordSubmitButtonCCProps {
  handleSubmit: () => void;
}

export function ResetPasswordSubmitButtonCC({
  handleSubmit,
}: ResetPasswordSubmitButtonCCProps) {
  return (
    <button
      onClick={handleSubmit}
      className={`w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal`}
    >
      로그인하기
    </button>
  );
}
