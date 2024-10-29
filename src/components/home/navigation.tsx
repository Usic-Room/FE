import SpotifyWhiteIcon from "@/public/images/spotifyWhite.svg";
import { SearchBar } from "./searchBar";
import { NavRegisterButtons } from "./navRegisterButtons";
import { NavProfileButtons } from "./navProfileButtons";
import Link from "next/link";
import LibraryLogo from "@/public/images/library.svg";
interface NavigationProps {
  isLogin: boolean;
}

interface SideBarProps {
  isLogin: boolean;
}

export function MainView({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-black-121212 text-white p-4 overflow-y-scroll h-full">
      <div className="relative main-content">{children}</div>
      <footer>2024 MusicRoom</footer>
    </div>
  );
}

export function NowPlaying() {
  return <div className="bg-black-121212 text-white">now playing....</div>;
}

export function SideBar({ isLogin }: SideBarProps) {
  return (
    <aside aria-label="Left Sidebar Navigation" className="relative">
      <div className="flex flex-row gap-3 items-center p-5 font-lg font-bold text-white">
        <LibraryLogo />
        <p className="mr-10">내 라이브러리</p>
      </div>
      {/* {
            isLogin ? <Library />
            : <DummyLibrary />
            } */}
    </aside>
  );
}

export function NavLogo() {
  return (
    <div className="flex-shrink-0">
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

export function Navigation({ isLogin }: NavigationProps) {
  return (
    <div className="relative flex h-14 items-center justify-between px-4 bg-black">
      {/* Logo - Always positioned left */}
      <div className="flex-shrink-0 w-10">
        <NavLogo />
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4 sm:mx-2 w-full">
        <SearchBar />
      </div>

      {/* Buttons */}
      <div className="flex space-x-2 mt-2 md:mt-0">
        {isLogin ? <NavProfileButtons /> : <NavRegisterButtons />}
      </div>
    </div>
  );
}
