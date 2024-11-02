import {
  NavigationBar,
  SideBar,
  MainView,
  NowPlaying,
} from "@/components/(main)/home/navigation";

// TODO: login 여부 저장 or 가져오기

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed bg-black p-2 w-full z-40 h-screen">
      <NavigationBar />
      <SideBar isLogin={false} />
      <MainView>{children}</MainView>
      {/* <NowPlaying /> */}
    </div>
  );
}
