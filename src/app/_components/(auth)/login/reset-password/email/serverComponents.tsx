import "server-only";

export function ResetPasswordEmailPageTitle() {
  return <h1 className="text-4xl font-bold mb-7">비밀번호를 재설정하세요.</h1>;
}

export function ResetPasswordEmailPageDescription() {
  return (
    <p className="text-lg mb-4 font-normal">
      Spotify 계정에 연결된 이메일 주소를 입력해주시면 이메일을
      보내드리겠습니다.
    </p>
  );
}
