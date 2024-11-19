import { LayoutNavigationBarSC } from "@/components/(main)/serverComponents/LayoutNavigationBarSC";
import { LayoutSideBarSC } from "@/components/(main)/serverComponents/LayoutSideBarSC";
import { LayoutnMobileNavigationSC } from "@/components/(main)/serverComponents/LayoutMobileNavigationSC";
import { LayoutMainViewSC } from "@/components/(main)/serverComponents/LayoutMainViewSC";

import { CookiesProvider } from "next-client-cookies/server"; //2.0.0 버전은 15버전을 사용해야 해서 1.1.1로 다운그레이드

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CookiesProvider>
      <div className="fixed bg-black p-2 w-full h-screen z-40">
        <LayoutNavigationBarSC />
        <LayoutSideBarSC />
        <LayoutMainViewSC>{children}</LayoutMainViewSC>
        {/* <NowPlaying /> */}
        <LayoutnMobileNavigationSC />
      </div>
    </CookiesProvider>
  );
}
