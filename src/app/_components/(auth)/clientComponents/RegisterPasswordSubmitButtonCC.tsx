import Link from "next/link";

interface RegisterPasswordSubmitButtonCCProps {
  isFormValid: boolean;
  handleSubmit: () => void;
}

export function RegisterPasswordSubmitButtonCC({
  isFormValid,
  handleSubmit,
}: RegisterPasswordSubmitButtonCCProps) {
  const registerUsernameUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_USERNAME || "/error";

  return isFormValid ? (
    <Link href={registerUsernameUrl}>
      <button className="w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal">
        다음
      </button>
    </Link>
  ) : (
    <button
      onClick={handleSubmit}
      className={`w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal`}
    >
      다음
    </button>
  );
}
