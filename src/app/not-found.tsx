import { NextPage } from "next";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Not found",
};

const NotFound: NextPage = () => {
	return (
		<div className="block absolute flex flex-col gap-5 items-center inset-x-1/4 inset-y-1/4 text-white">
			<p className="font-bold text-2xl p-3">페이지를 찾을 수 없음</p>
			<p className="font-thin text-sm">원하는 페이지를 찾지 못했습니다.</p>
			<Link href="/home">
				<button className="py-4 px-8 rounded-full bg-white text-black p-4 font-bold">
					홈
				</button>
			</Link>
		</div>
	);
};
export default NotFound;

//https://velog.io/@yangareum1818/%EC%97%90%EB%9F%AC-Error-Next13.js-The-default-export-of-notFound-is-not-a-React-Component-in
