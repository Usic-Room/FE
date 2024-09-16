// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import localFont from "next/font/local";
import SpotifyLogo from "@/public/images/spotify.svg"; // Correct import path

const pretendard = localFont({
  src: "../../../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

//페이지 설명을 추가하려면 metadata 객체를 만들고 title 및 description 속성을 추가합니다.
export const metadata: Metadata = {
  title: "Register - Spotify",
  description: "Register page for Spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <header className="flex justify-center pt-32 bg-white">
          <SpotifyLogo alt="Spotify Logo" />
        </header>
        {children}
      </body>
    </html>
  );
}
