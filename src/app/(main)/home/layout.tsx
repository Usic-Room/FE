import {
	Navigation,
	SideBar,
	MainView,
	NowPlaying,
} from "@/components/home/navigation";

// TODO: login 여부 저장 or 가져오기

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="kr">
			<body>
				<div
					className="bg-black min-h-screen p-2"
					style={{
						display: "grid",
						gap: "1rem",
						gridTemplateColumns: "auto 1fr",
						gridTemplateRows: "auto 1fr auto",
						gridTemplateAreas: `
					"navbar navbar navbar"
					"sidebar mainview mainview"
					"nowplaying nowplaying nowplaying"`,
					}}
				>
					<div
						className="w-full py-2 sm:px-6 lg:px-8 bg-black"
						style={{ gridArea: "navbar" }}
					>
						<Navigation isLogin={false} />
					</div>
					<div
						className="h-screen bg-black-121212 rounded-lg"
						style={{ gridArea: "sidebar" }}
					>
						<SideBar isLogin={false} />
					</div>
					<div
						className="h-screen rounded-lg overflow-y-auto"
						style={{ gridArea: "mainview" }}
					>
						<MainView>{children}</MainView>
					</div>

					<div
						className="fixed relatvie bottom-0 w-full z-5"
						style={{ gridArea: "nowplaying" }}
					>
						<NowPlaying />
					</div>
				</div>
			</body>
		</html>
	);
}
