import SpotifyWhiteIcon from "@/public/images/spotifyWhite.svg";
import HomeIcon from "@/public/images/home.svg";
import { MobileSearchBar, SearchBar } from "./searchBar";
import { NavRegisterButtons } from "./navRegisterButtons";
import { NavProfileButtons } from "./navProfileButtons";
import Link from "next/link";
import LibraryLogo from "@/public/images/library.svg";
import PlusLogo from "@/public/images/plus.svg";

interface NavigationProps {
  isLogin: boolean;
}

interface SideBarProps {
  isLogin: boolean;
}

// TODO: Scrollbar CSS 처리
export function MainView({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full grow rounded-lg overflow-y-auto">
      <div className="bg-black-121212 text-white h-full flex flex-col">
        <div className="flex-grow p-4 overflow-y-auto scrollbar-hide">
          {children}
        </div>
        <footer className="p-4">2024 MusicRoom</footer>
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
    <div className="hidden sm:block bg-black-121212 left-0 rounded-lg flex">
      <aside aria-label="Left Sidebar Navigation" className="relative">
        <div className="flex flex-row gap-3 items-center p-5 font-lg font-bold text-white">
          <LibraryLogo />
          <p className="mr-10">내 라이브러리</p>
          <PlusLogo />
        </div>
        <div className="text-white">
          <h1>playlist 1</h1>
        </div>
        <div className="text-white">
          <h1>playlist 2</h1>
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

//export function Navigation({ isLogin }: NavigationProps) {
//  return (
//    <div className="relative flex h-14 items-center justify-between px-4 flex-wrap">
//      {/* Logo */}
//      <NavLogo />

//      {/* Search Bar */}
//      <div className="flex-grow mx-4 mt-2 md:mt-0">
//        <SearchBar />
//      </div>

//      {/* Buttons */}
//      <div className="flex space-x-2 mt-2 md:mt-0">
//        {isLogin ? <NavProfileButtons /> : <NavRegisterButtons />}
//      </div>
//    </div>
//  );
//}

export function NavigationBar() {
  return (
    <>
      <div className="hidden sm:block w-full py-2 bg-black ">
        <Navigation isLogin={false} />
      </div>
      <div className="bg-black w-full z-50 bottom-0 absolute fixed h-10 px-5 sm:hidden">
        <MobileNavigation isLogin={false} />
      </div>
    </>
  );
}

export function MobileNavigation({ isLogin }: NavigationProps) {
  return (
    <div className="bg-black flex flex-row justify-between text-white">
      {/* <MobileSearchBar /> */}
      <div className="flex flex-col">
        <Link href="/home">
          <PlusLogo />
          <p>홈</p>
        </Link>
      </div>
      <div className="flex flex-col">
        <Link href="/home/search">
          <PlusLogo />
          <p>검색</p>
        </Link>
      </div>
      <div className="flex flex-col">
        <PlusLogo />
        <p>라이브러리</p>
      </div>
    </div>
  );
}

export function Navigation({ isLogin }: NavigationProps) {
  return (
    <div className="relative flex items-center justify-between px-4 bg-black h-14">
      {/* Logo - fixed to the left with absolute positioning */}

      <NavLogo />
      {/* Search Bar - flexible, adjusts size based on available space */}
      <div className="grow w-full">
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
