// layout.tsx
import "@/app/globals.css";
import localFont from "next/font/local";
import { FormProvider } from "@/app/(auth)/register/_components/registerForm";


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
    <FormProvider>
      <html lang="kr" className={`${pretendard.variable}`}>
        <body className={pretendard.className}>
          {/*<HeaderSpotifyLogo />*/}
          {children}
        </body>
      </html>
    </FormProvider>
  );
}
