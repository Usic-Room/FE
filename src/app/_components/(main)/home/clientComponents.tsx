"use client";
//import {
//  NavProfileButtons,
//  NavRegisterButtons,
//} from "@/app/_components/(main)/home/serverComponents";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { useIsLogin } from "@/app/_hooks/useIsLogin";

import { useIsSearchPath, useSearchResult } from "@/app/_hooks/useSearch";

//import { NavLogo } from "@/app/_components/(main)/home/serverComponents";

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

export function SearchBar() {
  const searchUrl = process.env.NEXT_PUBLIC_HOME_SEARCH || "/error";
  const isSearchPath = useIsSearchPath();

  return (
    <form className="max-w-md mx-auto px-10 md:px-8 lg:px-5">
      <div className="relative">
        {isSearchPath ? (
          <SearchInputBar />
        ) : (
          <Link href={searchUrl}>
            <SearchInputBar />
          </Link>
        )}
        <SearchButton />
      </div>
    </form>
  );
}

export function SearchInputBar() {
  const { query, handleInputChange } = useSearchResult();

  return (
    <input
      type="search"
      id="default-search"
      value={query}
      onChange={handleInputChange}
      className="peer block w-full p-4 ps-14 text-m text-white border rounded-full border-black bg-black-1F1F1F outline-none focus:ring-2 focus:ring-white focus:border-white"
      placeholder="어떤 음악을 듣고 싶으세요?"
      required
    />
  );
}

export function SearchButton() {
  const { handleSearchButtonClicked } = useSearchResult();

  return (
    <button
      type="button"
      onClick={handleSearchButtonClicked}
      className="peer-focus:text-white text-gray-500 absolute inset-y-0 start-0 flex items-center ps-4"
    >
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </button>
  );
}
