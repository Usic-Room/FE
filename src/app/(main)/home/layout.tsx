import {
  SideBar,
  MainView,
  NowPlaying,
} from "@/app/_components/(main)/home/serverComponents";
import { NavigationBar } from "@/app/_components/(main)/home/serverComponents";

import { CookiesProvider } from "next-client-cookies/server"; //2.0.0 버전은 15버전을 사용해야 해서 1.1.1로 다운그레이드

// TODO: login 여부 저장 or 가져오기

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CookiesProvider>
      <div className="fixed bg-black p-2 w-full z-40 h-screen">
        <NavigationBar />
        <SideBar />
        <MainView>{children}</MainView>
        {/* <NowPlaying /> */}
      </div>
    </CookiesProvider>
  );
}
