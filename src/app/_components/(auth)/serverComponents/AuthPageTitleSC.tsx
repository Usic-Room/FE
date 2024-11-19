import "server-only";

interface AuthPageTitleSCProps {
  title: string;
}

export function AuthPageTitleSC({ title }: AuthPageTitleSCProps) {
  return <h1 className="text-4xl font-bold mb-7">{title}</h1>;
}
