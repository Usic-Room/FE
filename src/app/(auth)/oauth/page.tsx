import { HeaderSpotifyLogo } from "@/app/_components/(auth)/register/serverComponents";

import { OAuthLodingAnimation } from "@/app/_components/(auth)/oauth/clientComponents";
import { OAuthPageDescription } from "@/app/_components/(auth)/oauth/serverComponents";
import { Metadata } from "next";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { sendCode } from "./api/router";

export const metadata: Metadata = {
  title: "OAuth",
};

export default function Page() {
  const searchParams = useSearchParams();
  const authorizationCode = searchParams.get("code");
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (authorizationCode) {
        try {
          const result = await sendCode(authorizationCode);
          console.log(result);
          setData(result);
          setLoading(false);
          if (result) {
            router.push("/");
          }
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [authorizationCode, router]);

  return (
    <Suspense fallback={<OAuthLodingAnimation />}>
      <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
        <HeaderSpotifyLogo />
        {/* <OAuthLodingAnimation /> */}
        <OAuthPageDescription />
      </div>
    </Suspense>
  );
}
