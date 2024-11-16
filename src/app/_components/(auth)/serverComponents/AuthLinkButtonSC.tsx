import "server-only";
import Link from "next/link";

interface AuthLinkButtonSCProps {
  href: string;
  buttonDescription: string;
}

export function AuthLinkButtonSC({
  href,
  buttonDescription,
}: AuthLinkButtonSCProps) {
  return (
    <Link href={href}>
      <button className="w-full p-3 mb-4 bg-purple-AC25FF text-white rounded-full hover:bg-[#ac44ff] font-normal">
        {buttonDescription}
      </button>
    </Link>
  );
}
