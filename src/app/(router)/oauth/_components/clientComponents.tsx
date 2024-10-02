"use client";

import Lottie from "react-lottie-player";
import loadingAnimation from "@/public/animations/loadingAnimation.json";

export function OAuthLodingAnimation() {
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
