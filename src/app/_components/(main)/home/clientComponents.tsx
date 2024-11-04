"use client";
//import {
//  NavProfileButtons,
//  NavRegisterButtons,
//} from "@/app/_components/(main)/home/serverComponents";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useIsLogin } from "@/app/_hooks/useIsLogin";

import { useSearchQuery } from "@/app/_hooks/useSearch";

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

export function MobileInputBar() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")!;

  const responseResults = useSearchQuery(searchQuery);

  return (
    <input
      type="search"
      id="default-search"
      value={searchQuery || ""}
      className="peer block bg-black-1F1F1F outline-none"
      placeholder="어떤 음악을 듣고 싶으세요?"
      required
    />
  );
}

export function SearchInputBar() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("search") || "";

  // 커스텀 훅 사용
  const { query, updateQuery, handleSearch } = useSearchQuery(initialQuery);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateQuery(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <input
      type="search"
      id="default-search"
      value={query}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      className="peer block w-full p-4 ps-14 text-m text-white border rounded-full border-black bg-black-1F1F1F outline-none focus:ring-2 focus:ring-white focus:border-white"
      placeholder="어떤 음악을 듣고 싶으세요?"
      required
    />
  );
}
