import "server-only";

export function VerificationPageTitleSC() {
  return <h1 className="text-4xl font-bold mb-10">환영합니다!</h1>;
}

export function VerificationPageDescriptionSC() {
  return (
    <p className="text-lg mb-10 font-normal">
      가입한 이메일로 인증코드를 보냈습니다.
      <br />
      코드를 입력해주세요.
    </p>
  );
}
