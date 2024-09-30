import SpotifyWhiteIcon from "@/public/images/spotifyWhite.svg"
import { SearchBar } from "./searchBar";
import { NavRegisterButtons } from "./navRegisterButtons"
import { NavProfileButtons } from "./navProfileButtons";
import Link from "next/link";
import LibraryLogo from "@/public/images/library.svg";
import { AddLibrary, Library, DummyLibrary } from "./library";
interface NavigationProps {
    isLogin: Boolean;
}

interface SideBarProps {
    isLogin: Boolean;
}

export function SideBar({
    isLogin
}: SideBarProps) {
    return (
        <aside className="fixed top-0 left-0 h-screen bg-[#121212]" aria-label="Left Sidebar Navigation">
            <div className="flex flex-row gap-2">
                <LibraryLogo />
                내 라이브러리
                <AddLibrary />
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
        <div className="">
            <Link href="/home">
                <SpotifyWhiteIcon />
            </Link>
        </div>
    );
}

export function Navigation({
    isLogin
}: NavigationProps) {
    return (
        <div className="mx-auto py-1 px-2 sm:px-6 lg:px-8 bg-black">
            <div className="relative flex h-14 items-center justify-center">
                <NavLogo />
                <SearchBar />
                {
                    isLogin ? <NavProfileButtons />
                        : <NavRegisterButtons />
                }
            </div>
        </div>
    );
}