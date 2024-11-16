import "server-only";

interface ResetPasswordTitleSCProps {
  title: string;
}

export function ResetPasswordTitleSC({ title }: ResetPasswordTitleSCProps) {
  return <h1 className="text-4xl font-bold mb-7">{title}</h1>;
}
