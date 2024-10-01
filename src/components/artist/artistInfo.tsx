import ProfileSample from "@/public/images/sample.svg";

interface ArtistBoxProps {
	id: number;
	username: string;
	image: string;
}

export function ArtistBox({ id, username, image }: ArtistBoxProps) {
	return (
		<div
			role="button"
			key={id}
			className="flex flex-col gap-2 justify-center items-center p-4"
		>
			<div className="w-24 h-24 rounded-full overflow-hidden">
				<img
					src={image}
					alt="artist profile image"
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="flex flex-col gap-1 self-start">
				<div>{username}</div>
				<div className="font-thin text-sm">아티스트</div>
			</div>
		</div>
	);
}
export function TopArtists() {
	let data = [
		{
			id: 0,
			username: "아이유",
			image: "/images/sample.svg",
		},
		{
			id: 2,
			username: "소녀시대",
			image: "/images/sample.svg",
		},
		{
			id: 31,
			username: "NewJeans",
			image: "/images/sample.svg",
		},
		{
			id: 18,
			username: "빈지노",
			image: "/images/sample.svg",
		},
		{
			id: 4,
			username: "정재희",
			image: "/images/sample.svg",
		},
		{
			id: 9,
			username: "민영재",
			image: "/images/sample.svg",
		},
	];
	return (
		<div className="flex flex-row gap-3 p-4">
			{data.map((artist) => (
				<ArtistBox
					key={artist.id}
					id={artist.id}
					username={artist.username}
					image={artist.image}
				/>
			))}
		</div>
	);
}
