import React from "react";
import GoogleIcon from "@/public/icons/google-24.svg"; // Correct import path

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

export function ProgessBarAndSections() {
  return (
    <div className="relative h-1 w-full bg-gray-300">
      <div className="h-1 bg-purple-AC25FF" style={{ width: "33%" }}></div>
    </div>
  );
}

export function SubmitButton({ label, onClick }: submitButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-96 p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal "
    >
      다음
    </button>
  );
}

export function SeperateOtherLoginWay() {
  return (
    <div className="w-full flex items-center my-4">
      <hr className="flex-grow border-t border-gray-D9DADC" />
      <span className="px-2 text-black font-bold text-sm">또는</span>
      <hr className="flex-grow border-t border-gray-D9DADC" />
    </div>
  );
}

export function GoogleOauthButton() {
  return (
    <button className="w-full p-3 mb-4 flex items-center justify-center border border-gray-878787 rounded-full hover:border-black">
      <GoogleIcon className="w-5 h-4 mr-2" alt="Google Icon" />
      <span className="font-normal text-gray-700">Continue with Google</span>
    </button>
  );
}

export function MoveToLoginPageButton() {
  return (
    <p className="text-black mt-4 font-normal text-sm flex items-center">
      <span>이미 계정이 있나요?</span>
      <a href="#" className="text-black underline font-bold ml-1">
        여기에서 로그인하세요
      </a>
    </p>
  );
}
