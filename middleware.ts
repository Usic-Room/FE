// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/about-2", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  //  matcher: "/about/:path*",
};

//https://reactnext-central.xyz/blog/nextjs/middleware

//미들웨어는 기본적으로 모든 라우트에 대해 다음과 같이 순차적으로 동작하는데 다음과 같다.
//https://velog.io/@pds0309/nextjs-%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4%EB%9E%80

//  (1) next.config.js의 `headers`, `redirects`
//  (2) Middleware
//  (3) nextjs.config.js의 `beforeFiles`
//  (4) 파일 시스템의 모든 파일 (`public`, `_next/static/, 페이지들)
//  (5) nextjs.config.js의 `afterFiles`
//  (6) Dynamic 라우트들 (ex: `/card/[cardId]`)
//  (7) nextjs.config.js의 `fallback`
