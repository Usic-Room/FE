import "server-only";

export function ResetPasswordPageTitle() {
  return <h1 className="text-4xl font-bold mb-7">비밀번호를 재설정합니다.</h1>;
}

export function ResetPasswordPageDescription() {
  return (
    <p className="text-lg mb-4 font-normal">새로운 비밀번호를 입력해주세요.</p>
  );
}
