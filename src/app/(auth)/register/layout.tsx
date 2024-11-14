import "@/app/globals.css";
import localFont from "next/font/local";
import { RegisterFormProvider } from "@/contexts/registerFormContext";

const pretendard = localFont({
  src: "../../../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RegisterVerificationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RegisterFormProvider>
      <html lang="kr" className={`${pretendard.variable}`}>
        <body className={pretendard.className}>
          {/*<HeaderSpotifyLogoSC />*/}
          {children}
        </body>
      </html>
    </RegisterFormProvider>
  );
}
