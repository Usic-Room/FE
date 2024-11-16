"use client";
import Link from "next/link";

import { useIsLogin } from "@/app/_hooks/useIsLogin";

export function LayoutNavigationButtonSectionCC() {
  const isLogin = useIsLogin();

  return (
    <div className="flex-shrink-0 space-x-2 mt-2 flex items-center">
      {/* Fixed width */}
      {isLogin ? (
        <LayoutNavigationRegisterButtons />
      ) : (
        <LayoutNavigationProfileButtons />
      )}
    </div>
  );
}

function LayoutNavigationRegisterButtons() {
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

function LayoutNavigationProfileButtons() {
  return (
    <div className="">
      <button>가입하기</button>
      <button>로그인하기</button>
    </div>
  );
}

interface RegisterButtonProps {
  name: string;
  backgroundColor: string;
  fontColor: string;
}

function RegisterButton({
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
