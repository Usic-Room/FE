import "server-only";
import Link from "next/link";

import HomeIcon from "@/public/images/home.svg";
import SearchIcon from "@/public/images/search.svg";
import PlusLargeIcon from "@/public/images/plus-lg.svg";

export function LayoutnMobileNavigationSC() {
  const homeUrl = process.env.NEXT_PUBLIC_MAIN || "/error";
  const searchUrl = process.env.NEXT_PUBLIC_MAIN_SEARCH || "/error";

  return (
    <div className="bg-black w-full z-50 left-0 bottom-0 absolute h-[4rem] px-2 pt-4 sm:hidden">
      <div className="grid h-full bg-black grid-cols-3 mx-auto text-white font-medium">
        <Link href={homeUrl}>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <HomeIcon />
            <span className="text-sm">홈</span>
          </button>
        </Link>
        <Link href={searchUrl}>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <SearchIcon />
            <span className="text-sm">검색</span>
          </button>
        </Link>
        <Link href="#">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5"
          >
            <PlusLargeIcon />
            <span className="text-sm">라이브러리</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
