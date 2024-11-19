"use client";

import Lottie from "react-lottie-player";
import loadingAnimation from "@/public/animations/loadingAnimation.json";
//import { RequestGoogleOAuthAuthroizationCode } from "@/auth/oauth/api/router";

//import { useEffect, useState } from "react";
//import { useSearchParams } from "next/navigation";
//import { useRouter } from "next/navigation";

export function OAuthLoadingAnimationCC() {
  //const params = useSearchParams();
  //const router = useRouter();
  //const [oauthData, setOauthData] = useState(null);

  //const code = params.get("code");

  //useEffect(() => {
  //  async function fetchOAuthData() {
  //    if (code) {
  //      const data = await RequestGoogleOAuthAuthorizationCode(code);
  //      if (data) {
  //        setOauthData(data);
  //        // 원하는 로직 추가 (예: 성공 시 이동할 경로로 라우팅)
  //        router.push("/success"); // 예시
  //      } else {
  //        console.error("OAuth 요청 실패");
  //      }
  //    }
  //  }
  //  fetchOAuthData();
  //}, [code, router]);

  return (
    <div className="w-full mt-14">
      <Lottie
        loop
        animationData={loadingAnimation}
        play
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
