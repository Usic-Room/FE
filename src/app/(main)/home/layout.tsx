import { Navigation, SideBar } from "@/components/home/navigation";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kr">
            <body>
                <Navigation isLogin={false} />
                <SideBar isLogin={false} />
                {children}
            </body>
        </html>
    );
}
