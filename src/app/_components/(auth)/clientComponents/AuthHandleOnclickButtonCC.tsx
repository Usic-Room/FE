"use client";

interface AuthHandleOnclickButtonCCProps {
  handleSubmit: () => void;
  buttonDescription: string;
}

export function AuthHandleOnclickButtonCC({
  handleSubmit,
  buttonDescription,
}: AuthHandleOnclickButtonCCProps) {
  return (
    <button
      onClick={handleSubmit}
      className={`w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal`}
    >
      {buttonDescription}
    </button>
  );
}
