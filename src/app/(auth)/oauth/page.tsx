"use client";

import { HeaderSpotifyLogo } from "@/app/_components/(auth)/register/serverComponents";
import { OAuthLodingAnimation } from "@/app/_components/(auth)/oauth/clientComponents";
import { OAuthPageDescription } from "@/app/_components/(auth)/oauth/serverComponents";
import { Metadata } from "next";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { sendCode } from "./api/router";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "OAuth",
// };

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const queryError = searchParams.get("error");
    if (queryError) {
      setError(decodeURIComponent(queryError));
    } else {
      router.push("/not-found");
    }
  }, [searchParams]);

  if (!error) {
    return null;
  }

  return (
    <div className="bg-black min-h-screen flex flex-col gap-5 items-center justify-center text-white">
      <p className="font-bold text-2xl p-3">
        에러코드 {error}. 오류가 발생했습니다.
      </p>
      <p className="font-thin text-sm">다시 시도해주세요.</p>
      <div className="flex gap-5 flex-row">
        <Link href="/">
          <button className="py-4 px-8 rounded-full bg-white text-black p-4 font-bold">
            홈
          </button>
        </Link>
        <Link href="/login">
          <button className="py-4 px-8 rounded-full bg-white text-black p-4 font-bold">
            로그인
          </button>
        </Link>
      </div>
    </div>
  );
}

// export default function Page() {
//   const searchParams = useSearchParams();
//   const authorizationCode = searchParams.get("code");
//   const [data, setData] = useState(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       if (authorizationCode) {
//         try {
//           const result = await sendCode(authorizationCode);
//           console.log(result);
//           setData(result);
//           setLoading(false);
//           if (result) {
//             router.push("/");
//           }
//         } catch (err) {
//           setError(err.message);
//           setLoading(false);
//         }
//       }
//     };

//     fetchData();
//   }, [authorizationCode, router]);

//   return (
//     <Suspense fallback={<OAuthLodingAnimation />}>
//       <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
//         <HeaderSpotifyLogo />
//         {/* <OAuthLodingAnimation /> */}
//         <OAuthPageDescription />
//       </div>
//     </Suspense>
//   );
// }
