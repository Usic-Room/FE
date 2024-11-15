import "server-only";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

import sampleImage from "@/public/images/sample.svg";
import SpotifyWhiteIcon from "@/public/images/spotifyWhite.svg";
import LibraryLogo from "@/public/images/library.svg";
import PlusLogo from "@/public/images/plus.svg";
import HomeIcon from "@/public/images/home.svg";
import SearchIcon from "@/public/images/search.svg";
import PlusLargeIcon from "@/public/images/plus-lg.svg";

import {
  SearchBar,
  ConditionalNavButtons,
} from "@/app/_components/(main)/clientComponents";

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
    <div className="h-full grow rounded-lg overflow-y-auto sm:pl-[19.5rem]">
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
    <div className="hidden h-full sm:block bg-black-121212 fixed left-0 w-[19rem] p-5 z-20 rounded-lg">
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
  const homeUrl = process.env.NEXT_PUBLIC_MAIN || "/error";

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

export function MobileNavigation() {
  const homeUrl = process.env.NEXT_PUBLIC_MAIN || "/error";
  const searchUrl = process.env.NEXT_PUBLIC_MAIN_SEARCH || "/error";

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

export function useSSRIsSearchPath() {
  const headersList = headers();
  const referer = headersList.get("referer") || "";
  const searchPath = "/home/search"; // 원하는 검색 경로 설정

  //console.log("referer: ", referer);
  //console.log("searchPath: ", searchPath);

  // 현재 URL이 searchPath로 시작하는지 확인
  const isSearchPath = referer.includes(searchPath);

  return isSearchPath;
}

interface ArtistBoxProps {
  id: number;
  username: string;
  image: string;
}

export function ArtistBox({ id, username, image }: ArtistBoxProps) {
  return (
    <div
      role="button"
      key={id}
      className="flex flex-col gap-2 justify-center items-center p-4"
    >
      <div className="w-24 h-24 rounded-full overflow-hidden">
        <Image
          src={image}
          alt="artist profile image"
          className="object-cover w-full h-full"
          width={96} // 24 * 4 for tailwind size in pixels
          height={96} // 24 * 4 for tailwind size in pixels
        />
      </div>
      <div className="flex flex-col gap-1 self-start">
        <div>{username}</div>
        <div className="font-thin text-sm">아티스트</div>
      </div>
    </div>
  );
}

export function TopArtistsSC() {
  let data = [
    {
      id: 0,
      username: "아이유",
      image: "./images/sample.svg",
    },
    {
      id: 2,
      username: "소녀시대",
      image: "./images/sample.svg",
    },
    {
      id: 31,
      username: "NewJeans",
      image: "./images/sample.svg",
    },
    {
      id: 18,
      username: "빈지노",
      image: "./images/sample.svg",
    },
    {
      id: 4,
      username: "정재희",
      image: "./images/sample.svg",
    },
    {
      id: 9,
      username: "민영재",
      image: "./images/sample.svg",
    },
  ];
  return (
    <div className="flex flex-row gap-3 p-4">
      {data.map((artist) => (
        <ArtistBox
          key={artist.id}
          id={artist.id}
          username={artist.username}
          image={artist.image}
        />
      ))}
    </div>
  );
}