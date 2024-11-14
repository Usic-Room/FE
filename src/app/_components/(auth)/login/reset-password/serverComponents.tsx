import "server-only";

interface ResetPasswordPageTitleSCProps {
  title: string;
}

export function ResetPasswordPageTitleSC({
  title,
}: ResetPasswordPageTitleSCProps) {
  //return <h1 className="text-4xl font-bold mb-7">비밀번호를 재설정합니다.</h1>;
  return <h1 className="text-4xl font-bold mb-7">{title}</h1>;
}

interface ResetPasswordPageDescriptionSCProps {
  description: string;
}

export function ResetPasswordPageDescriptionSC({
  description,
}: ResetPasswordPageDescriptionSCProps) {
  return (
    //<p className="text-lg mb-4 font-normal">새로운 비밀번호를 입력해주세요.</p>
    <p className="text-lg mb-4 font-normal">{description}</p>
  );
}
