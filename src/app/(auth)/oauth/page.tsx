import { HeaderSpotifyLogo } from "@/app/(router)/register/_components/serverComponents";

import { OAuthLodingAnimation } from "@/router/oauth/_components/clientComponents";

import { OAuthPageDescription } from "@/router/oauth/_components/serverComponents";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "OAuth",
};

export default function Page() {
	return (
		<div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
			<HeaderSpotifyLogo />
			<OAuthLodingAnimation />
			<OAuthPageDescription />
		</div>
	);
}
