import "server-only";
import Link from "next/link";

export function LoginMoveToResetPasswordPageButtonSC() {
  const resetPasswordUrl =
    process.env.NEXT_PUBLIC_RESET_PASSWORD_EMAIL || "/login/reset-password";

  return (
    <Link href={resetPasswordUrl} className="text-sm font-normal underline">
      비밀번호를 잊었나요?
    </Link>
  );
}
