export function VerificationPageTitle() {
  return <h1 className="text-4xl font-bold mb-10">환영합니다!</h1>;
}

export function VerificationPageDescription() {
  return (
    <p className="text-lg mb-10 font-normal">
      가입한 이메일로 인증코드를 보냈습니다.
      <br />
      코드를 입력해주세요.
    </p>
  );
}

interface VerificationSubmitButtonProps {
  isCodeValid: boolean;
  handleSubmit: () => void;
}

export function VerificationSubmitButton({
  isCodeValid,
  handleSubmit,
}: VerificationSubmitButtonProps) {
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
