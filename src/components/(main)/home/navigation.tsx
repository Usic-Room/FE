import SpotifyWhiteIcon from "@/public/images/spotifyWhite.svg";
import HomeIcon from "@/public/images/home.svg";
import SearchIcon from "@/public/images/search.svg";
import { SearchBar } from "@/components/(main)/home/searchBar";
import { NavRegisterButtons } from "@/components/(main)/home/navRegisterButtons";
import { NavProfileButtons } from "@/components/(main)/home/navProfileButtons";
import Link from "next/link";
import LibraryLogo from "@/public/images/library.svg";
import PlusLogo from "@/public/images/plus.svg";
import PlusLargeIcon from "@/public/images/plus-lg.svg";

interface NavigationProps {
  isLogin: boolean;
}

interface SideBarProps {
  isLogin: boolean;
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

export function NowPlaying() {
  return (
    <div className="bottom-0 w-full z-5">
      <div className="bg-black-121212 text-white">now playing....</div>
    </div>
  );
}

export function SideBar({ isLogin }: SideBarProps) {
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
  return (
    <div className="absolute left-4 flex-shrink-0 w-16">
      <Link href="/home">
        <SpotifyWhiteIcon />
      </Link>
    </div>
  );
}

export function NavigationBar() {
  return (
    <>
      <div className="hidden sm:block w-full py-2 bg-black ">
        <Navigation isLogin={false} />
      </div>
      <div className="bg-black w-full z-50 left-0 bottom-0 absolute h-[4rem] px-2 pt-4 sm:hidden">
        <MobileNavigation isLogin={false} />
      </div>
    </>
  );
}

export function MobileNavigation({ isLogin }: NavigationProps) {
  return (
    <div className="grid h-full bg-black grid-cols-3 mx-auto text-white font-medium">
      <Link href="/home">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <HomeIcon />
          <span className="text-sm">홈</span>
        </button>
      </Link>
      <Link href="/home/search">
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
  );
}

export function Navigation({ isLogin }: NavigationProps) {
  return (
    <div className="relative flex items-center justify-between px-4 bg-black h-14">
      {/* Logo - fixed to the left with absolute positioning */}

      <NavLogo />
      {/* Search Bar - flexible, adjusts size based on available space */}
      <div className="grow w-full ml-4">
        <SearchBar />
      </div>

      {/* Buttons - fixed width, doesn't move */}
      <div className="flex-shrink-0 space-x-2 mt-2 flex items-center">
        {" "}
        {/* Fixed width */}
        {isLogin ? <NavProfileButtons /> : <NavRegisterButtons />}
      </div>
    </div>
  );
}
