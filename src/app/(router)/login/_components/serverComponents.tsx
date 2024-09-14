import React from "react";
import GoogleIcon from "@/public/images/google-24.svg"; // Correct import path

interface NewButtonProps {
  label: string;
  size: "small" | "large";
  onClick?: () => void;
}

interface submitButtonProps {
  label: string;
  onClick?: () => void;
}

export function NewButton({ label, size, onClick }: NewButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-3 mb-4 ${
        size === "small" ? "text-sm" : "text-lg"
      } bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal`}
    >
      {label}
    </button>
  );
}

export function SubmitButton({ label, onClick }: submitButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal "
    >
      다음
    </button>
  );
}

export function GoogleOauthButton() {
  return (
    <button className="w-3/4 p-3 mb-4 flex items-center justify-center border border-gray-878787 rounded-full hover:border-black">
      <GoogleIcon className="w-5 h-4 mr-2" alt="Google Icon" />
      <span className="font-normal text-gray-700">Continue with Google</span>
    </button>
  );
}
