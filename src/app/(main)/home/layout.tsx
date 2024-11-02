import {
  SideBar,
  MainView,
  NowPlaying,
} from "@/app/_components/(main)/home/serverComponents";

import { NavigationBar } from "@/app/_components/(main)/home/serverComponents";

// TODO: login 여부 저장 or 가져오기

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed bg-black p-2 w-full z-40 h-screen">
      <NavigationBar />
      <SideBar />
      <MainView>{children}</MainView>
      {/* <NowPlaying /> */}
    </div>
  );
}
