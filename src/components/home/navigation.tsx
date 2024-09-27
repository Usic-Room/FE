import SpotifyWhiteIcon from "@/public/images/spotifyWhite.svg"
import { SearchBar } from "./searchBar";
import { NavRegisterButtons } from "./navRegisterButtons"
import { NavProfileButtons } from "./navProfileButtons";
import Link from "next/link";

interface NavigationProps {
    isLogin: Boolean;
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