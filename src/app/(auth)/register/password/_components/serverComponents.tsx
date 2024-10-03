import React from "react";
import ChevronLeft from "@/public/images/chevron-left.svg"; // Correct import path
import Link from "next/link";

interface ProgessBarAndSectionsProps {
  width: string;
}

export function ProgessBarAndSections({ width }: ProgessBarAndSectionsProps) {
  return (
    <div className="w-full mt-4 mb-4">
      <div className="relative h-1 w-full bg-gray-300">
        <div className="h-1 bg-purple-AC25FF" style={{ width }}></div>
      </div>
    </div>
  );
}

interface BackToPreviousLevelPageProps {
  level: string;
  title: string;
  backURL: string;
}

export function BackToPreviousLevelPage({
  level,
  title,
  backURL,
}: BackToPreviousLevelPageProps) {
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
