"use client";
import Link from "next/link";

import { useIsLogin } from "@/app/_hooks/useIsLogin";
import { useIsSearchPath, useSearchResult } from "@/app/_hooks/useSearch";

//import { NavLogo } from "@/app/_components/(main)/home/serverComponents";

import SearchButtonImage from "@/public/images/searchButton.svg";

interface RegisterButtonProps {
  name: string;
  backgroundColor: string;
  fontColor: string;
}

export function RegisterButton({
  name,
  backgroundColor,
  fontColor,
}: RegisterButtonProps) {
  return (
    <div
      className={`py-4 px-7 rounded-full ${backgroundColor} ${fontColor} w-auto text-sm whitespace-nowrap`}
    >
      {name}
    </div>
  );
}

export function NavRegisterButtons() {
  const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION || "/error";
  const loginUrl = process.env.NEXT_PUBLIC_LOGIN || "/error";

  return (
    <div className="flex item-center justify-center gap-2">
      <Link href={registrationUrl}>
        <RegisterButton
          name={"가입하기"}
          backgroundColor={"bg-gray-950"}
          fontColor={"text-white"}
        />
      </Link>
      <Link href={loginUrl}>
        <RegisterButton
          name={"로그인하기"}
          backgroundColor={"bg-white"}
          fontColor={"text-gray-950"}
        />
      </Link>
    </div>
  );
}

export function NavProfileButtons() {
  return (
    <div className="">
      <button>가입하기</button>
      <button>로그인하기</button>
    </div>
  );
}

export function ConditionalNavButtons() {
  const isLogin = useIsLogin();

  return (
    <div className="flex-shrink-0 space-x-2 mt-2 flex items-center">
      {/* Fixed width */}
      {isLogin ? <NavRegisterButtons /> : <NavProfileButtons />}
    </div>
  );
}

//export function MobileInputBar() {
//  const searchParams = useSearchParams();
//  const searchQuery = searchParams.get("search")!;

//  const responseResults = useSearchQuery(searchQuery);

//  return (
//    <input
//      type="search"
//      id="default-search"
//      value={searchQuery || ""}
//      className="peer block bg-black-1F1F1F outline-none"
//      placeholder="어떤 음악을 듣고 싶으세요?"
//      required
//    />
//  );
//}

export function SearchInputBar() {
  const { query, handleInputChange, handleClearInput } = useSearchResult();

  return (
    <div className="relative w-full">
      <SearchButton />
      <input
        type="search"
        id="default-search"
        value={query}
        onChange={handleInputChange}
        className="peer block w-full p-4 pl-12 pr-12 text-m text-white border rounded-full border-black bg-[#1F1F1F] outline-none focus:ring-2 focus:ring-white focus:border-white"
        placeholder="어떤 음악을 듣고 싶으세요?"
      />

      {/* Clear (x) 버튼 */}
      {query && (
        <button
          type="button"
          onClick={handleClearInput}
          className="absolute inset-y-0 right-4 flex items-center text-2xl  text-gray-878787 hover:text-white "
        >
          &#x2715;
        </button>
      )}
    </div>
  );
}

export function SearchButton() {
  const { handleSearchButtonClicked } = useSearchResult();

  return (
    <button
      type="button"
      onClick={handleSearchButtonClicked}
      className="absolute inset-y-0 left-4 flex items-center text-gray-500"
    >
      <SearchButtonImage className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}
