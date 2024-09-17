import "server-only";
import Link from "next/link";

export function ResetPasswordSuccessPageTitle() {
  return <h1 className="text-4xl font-bold mb-7">받은 편지함을 확인하세요.</h1>;
}

export function ResetPasswordSuccessPageDescription() {
  return (
    <p className="text-lg mb-12 font-normal">
      이메일을 보내드렸습니다. 지침에 따라 Spotify 계정에 로그인하세요.
    </p>
  );
}

export function BackToLoginPageButton() {
  const loginPageUrl = process.env.NEXT_PUBLIC_LOGIN || "/error";

  return (
    <div className="w-full">
      <Link href={loginPageUrl}>
        <button className="w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal">
          로그인 화면으로 돌아가기
        </button>
      </Link>
    </div>
  );
}
