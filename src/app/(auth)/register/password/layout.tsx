// layout.tsx
import RegisterLayout from "../layout";
import "@/app/globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../../../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RegisterPasswordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RegisterLayout>{children}</RegisterLayout>;
}
