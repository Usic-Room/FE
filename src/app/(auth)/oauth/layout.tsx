// layout.tsx
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <header className="flex justify-center pt-8 bg-white">
          <SpotifyLogo alt="Spotify Logo" />
        </header>
        {children}
      </body>
    </html>
  );
}
