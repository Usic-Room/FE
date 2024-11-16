import "server-only";
import Link from "next/link";

export function RegisterMoveToLoginPageButtonSC() {
  const loginPageUrl = process.env.NEXT_PUBLIC_LOGIN || "/error";

  return (
    <p className="text-black mt-4 font-normal text-sm flex items-center mb-8">
      <span>이미 계정이 있나요?</span>
      <Link href={loginPageUrl} className="text-black underline font-bold ml-1">
        여기에서 로그인하세요
      </Link>
    </p>
  );
}
