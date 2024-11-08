import {
  SideBar,
  MainView,
  MobileNavigation,
} from "@/app/_components/(main)/home/serverComponents";
import { NavigationBar } from "@/app/_components/(main)/home/serverComponents";

import { CookiesProvider } from "next-client-cookies/server"; //2.0.0 버전은 15버전을 사용해야 해서 1.1.1로 다운그레이드

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CookiesProvider>
      <div className="fixed bg-black p-2 w-full h-screen z-40">
        <NavigationBar />
        <SideBar />
        <MainView>{children}</MainView>
        {/* <NowPlaying /> */}
        <MobileNavigation />
      </div>
    </CookiesProvider>
  );
}
