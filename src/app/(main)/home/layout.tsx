import {
  NavigationBar,
  SideBar,
  MainView,
  NowPlaying,
} from "@/components/home/navigation";

// TODO: login 여부 저장 or 가져오기

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed bg-black p-2 w-full z-10 h-screen">
      <NavigationBar />
      <div className="flex flex-row gap-1 ">
        <SideBar isLogin={false} />
        <MainView>{children}</MainView>
      </div>
      {/* <NowPlaying /> */}
    </div>
  );
}
