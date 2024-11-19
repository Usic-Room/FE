import { Metadata } from "next";
import { SearchResultForm } from "@/app/_components/(main)/clientComponents/forms/SearchResultForm";

export const metadata: Metadata = {
  title: "Search Result",
};

export default function SearchResultPage() {
  return (
    <div className="flex flex-col h-full bg-black-121212 text-white">
      <SearchResultForm />
    </div>
  );
}
