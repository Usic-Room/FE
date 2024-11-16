import "server-only";

interface AuthPageDescriptionSCProps {
  description: string;
}

export function AuthPageDescriptionSC({
  description,
}: AuthPageDescriptionSCProps) {
  return (
    <p className="text-lg mb-4 font-normal whitespace-pre-wrap">
      {description}
    </p>
  );
}
