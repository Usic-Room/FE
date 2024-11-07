import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
