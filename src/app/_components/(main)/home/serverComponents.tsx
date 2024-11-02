import "server-only";

import SpotifyWhiteIcon from "@/public/images/spotifyWhite.svg";
import LibraryLogo from "@/public/images/library.svg";
import PlusLogo from "@/public/images/plus.svg";
import HomeIcon from "@/public/images/home.svg";
import SearchIcon from "@/public/images/search.svg";
import PlusLargeIcon from "@/public/images/plus-lg.svg";

import Link from "next/link";

import {
  SearchInputBar,
  ConditionalNavButtons,
} from "@/components/(main)/home/clientComponents";

export function Library() {
  return <h1>DummyLibrary</h1>;
}

export function NowPlaying() {
  return (
    <div className="bottom-0 w-full z-5">
      <div className="bg-black-121212 text-white">now playing....</div>
    </div>
  );
}

// TODO: Scrollbar CSS 처리
export function MainView({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full grow rounded-lg overflow-y-auto md:pl-[19.5rem]">
      <div className="bg-black-121212 text-white h-full flex flex-col">
        <div className="flex-grow p-4 overflow-y-auto scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}

export function SideBar() {
  return (
    <div className="hidden h-full sm:block bg-black-121212 fixed left-0 right-auto w-[19rem] p-5 z-20 rounded-lg">
      <aside aria-label="Left Sidebar Navigation" className="relative">
        <div className="flex flex-row gap-3 items-center p-5 font-lg font-bold text-white">
          <LibraryLogo />
          <p className="mr-10">내 라이브러리</p>
          <PlusLogo />
        </div>
        {/* {
                isLogin ? <Library />
                : <DummyLibrary />
                } */}
      </aside>
    </div>
  );
}

export function NavLogo() {
  const homeUrl = process.env.NEXT_PUBLIC_HOME || "/error";

  return (
    <div className="absolute left-4 flex-shrink-0 w-16">
      <Link href={homeUrl}>
        <SpotifyWhiteIcon />
      </Link>
    </div>
  );
}

export function NavigationBar() {
  return (
    <>
      <div className="hidden sm:block w-full py-2 bg-black ">
        <div className="relative flex items-center justify-between px-4 bg-black h-14">
          {/* Logo - fixed to the left with absolute positioning */}

          <NavLogo />
          {/* Search Bar - flexible, adjusts size based on available space */}
          <div className="grow w-full ml-4">
            <SearchBar />
          </div>
          <ConditionalNavButtons />
        </div>
      </div>
    </>
  );
}

export function SearchBar() {
  const searchUrl = process.env.NEXT_PUBLIC_HOME_SEARCH || "/error";

  return (
    <form className="max-w-md mx-auto px-10 md:px-8 lg:px-5">
      <div className="relative">
        <Link href={searchUrl}>
          <SearchInputBar />
        </Link>
        <button
          type="submit"
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
      </div>
    </form>
  );
}

export function MobileNavigation() {
  const homeUrl = process.env.NEXT_PUBLIC_HOME || "/error";
  const searchUrl = process.env.NEXT_PUBLIC_SEARCH || "/error";

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

export function NavProfileButtons() {
  return (
    <div className="">
      <button>가입하기</button>
      <button>로그인하기</button>
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
