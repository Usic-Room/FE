"use client";

import Lottie from "react-lottie-player";
import loadingAnimation from "@/public/animations/loadingAnimation.json";
//import { RequestGoogleOAuthAuthroizationCode } from "@/auth/oauth/api/router";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function OAuthLodingAnimation() {
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

// API 요청 함수
async function RequestGoogleOAuthAuthorizationCode(code: string) {
  try {
    const response = await fetch(`http://localhost:8080/api/oauth/sendcode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        redirectUri: "http://localhost:3000/oauth",
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching OAuth data:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
}
