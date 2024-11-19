import React from "react";
import Link from "next/link";

export function RegisterMoveToNextPageFromTermsButtonSC() {
  const registerVerificationUrl =
    process.env.NEXT_PUBLIC_REGISTRATION_VERIFICATION ||
    "/register/verification";
  return (
    <div className="w-full max-w-xs text-left mb-4">
      <Link href={registerVerificationUrl}>
        <button
          className={`w-full p-3 mt-40 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal`}
        >
          가입하기
        </button>
      </Link>
    </div>
  );
}
