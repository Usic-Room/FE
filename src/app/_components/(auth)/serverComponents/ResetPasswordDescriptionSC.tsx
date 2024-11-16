import "server-only";

interface ResetPasswordDescriptionSCProps {
  description: string;
}

export function ResetPasswordDescriptionSC({
  description,
}: ResetPasswordDescriptionSCProps) {
  return <p className="text-lg mb-4 font-normal">{description}</p>;
}
