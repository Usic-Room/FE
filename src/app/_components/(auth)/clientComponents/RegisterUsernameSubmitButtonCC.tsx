import Link from "next/link";

interface RegisterUsernameSubmitButtonCCProps {
  isUsernameValid: boolean;
  handleSubmit: () => void;
}

// Submit button for the username input
export function RegisterUsernameSubmitButtonCC({
  isUsernameValid,
  handleSubmit,
}: RegisterUsernameSubmitButtonCCProps) {
  const registrationUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_TERMS || "/error";

  return isUsernameValid ? (
    <Link href={registrationUrl}>
      <button className="w-full p-3 mt-44 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff]">
        다음
      </button>
    </Link>
  ) : (
    <button
      onClick={handleSubmit}
      className={`w-full p-3 mt-44 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal`}
    >
      다음
    </button>
  );
}
