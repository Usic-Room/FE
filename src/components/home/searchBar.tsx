"use client";
import Link from "next/link";

export function SearchInputBar() {
	return (
		<input
			type="search"
			id="default-search"
			className="peer block w-full p-4 ps-14 text-m text-white border rounded-full border-black bg-[#1F1F1F] outline-none focus:ring-2 focus:ring-white focus:border-white"
			placeholder="어떤 음악을 듣고 싶으세요?"
			onFocus={(e) => e.target.click()}
			required
		/>
	);
}

export function SearchBar() {
	return (
		<form className="w-1/2 mx-auto">
			<div className="relative">
				<Link href="/home/search">
					<SearchInputBar />
				</Link>
				<button
					type="submit"
					className="peer-focus:text-white text-gray-500 absolute inset-y-0 start-0 flex items-center ps-4"
				>
					<svg
						className="w-6 h-6"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</button>
			</div>
		</form>
	);
}
