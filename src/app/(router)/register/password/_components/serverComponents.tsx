import React from "react";
import "server-only";

import ChevronLeft from "@/public/images/chevron-left.svg"; // Correct import path

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
}

export function BackToPreviousLevelPage({
  level,
  title,
}: BackToPreviousLevelPageProps) {
  return (
    <div className="w-full flex items-center mb-8">
      <button className="text-black p-4">
        <ChevronLeft className="w-7 h-7" alt="Back Arrow" />
      </button>
      <div className="flex flex-col">
        <p className="text-lg text-gray-600">{level}/3단계</p>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  );
}

export function SeperateOtherLoginWay() {
  return (
    <div className="w-full flex items-center my-4">
      <hr className="flex-grow border-t border-gray-D9DADC" />
      <span className="px-2 text-black font-bold text-sm">또는</span>
      <hr className="flex-grow border-t border-gray-D9DADC" />
    </div>
  );
}
