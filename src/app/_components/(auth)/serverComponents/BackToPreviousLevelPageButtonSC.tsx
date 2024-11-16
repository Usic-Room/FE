import "server-only";
import Link from "next/link";
import ChevronLeft from "@/public/images/chevron-left.svg"; // Correct import path

interface BackToPreviousLevelPageButtonSCProps {
  level: string;
  title: string;
  backURL: string;
}

export function BackToPreviousLevelPageButtonSC({
  level,
  title,
  backURL,
}: BackToPreviousLevelPageButtonSCProps) {
  return (
    <div className="w-full flex items-center mb-8">
      <Link href={backURL ?? "/error"}>
        <button className="text-black p-4">
          <ChevronLeft className="w-7 h-7" alt="Back Arrow"></ChevronLeft>
        </button>
      </Link>
      <div className="flex flex-col">
        <p className="text-lg text-gray-600">{level}/3단계</p>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
