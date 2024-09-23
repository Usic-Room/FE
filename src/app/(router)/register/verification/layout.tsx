// layout.tsx
import type { Metadata } from "next";
import RegisterLayout from "../layout";
import "@/app/globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../../../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

//페이지 설명을 추가하려면 metadata 객체를 만들고 title 및 description 속성을 추가합니다.
export const metadata: Metadata = {
  title: "RegisterTerm - Spotify",
  description: "RegisterTerm page for Spotify",
};

export default function RegisterTermLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RegisterLayout>{children}</RegisterLayout>;
}
