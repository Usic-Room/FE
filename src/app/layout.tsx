import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";

import {
  SideBar,
  MainView,
  NowPlaying,
  MobileNavigation,
} from "@/app/_components/(main)/home/serverComponents";
import { NavigationBar } from "@/app/_components/(main)/home/serverComponents";

import { CookiesProvider } from "next-client-cookies/server"; //2.0.0 버전은 15버전을 사용해야 해서 1.1.1로 다운그레이드

import { pathname } from "next-extra/pathname";

export const metadata: Metadata = {
  title: {
    template: "%s | Music for everyone",
    default: "Musicroom",
  },
  description: "The best music experience for everyone.",
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = await pathname();

  const isOauth = router.startsWith("/isolated");

  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className}`}>
        <CookiesProvider>
          {!isOauth && (
            <div className="fixed bg-black p-2 w-full h-screen z-40">
              <NavigationBar />
              <SideBar />
              <MainView>{children}</MainView>
              {/* <NowPlaying /> */}
              <MobileNavigation />
            </div>
          )}
        </CookiesProvider>
      </body>
    </html>
  );
}
