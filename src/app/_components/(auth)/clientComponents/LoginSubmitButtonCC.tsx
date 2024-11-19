interface LoginSubmitButtonCCProps {
  handleSubmit: () => void;
  isSubmitting: boolean; // To indicate loading state
  buttonDescription: string;
  buttonSubmittingDescription: string;
}

export function LoginSubmitButtonCC({
  handleSubmit,
  isSubmitting,
  buttonDescription,
  buttonSubmittingDescription,
}: LoginSubmitButtonCCProps) {
  return (
    <button
      onClick={handleSubmit}
      disabled={isSubmitting} // Disable the button while submitting
      className={`w-80 p-3 text-white rounded-full font-bold mb-4 ${
        isSubmitting
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-purple-AC25FF hover:bg-[#ac44ff]"
      }`}
    >
      {/*{isSubmitting ? "로그인 중..." : "로그인하기"}*/}
      {isSubmitting ? buttonSubmittingDescription : buttonDescription}
    </button>
  );
}
