import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const isSearchPath = request.nextUrl.pathname.startsWith("/home/search");

  // NextResponse 헤더에 상태 설정
  const response = NextResponse.next();
  response.headers.set("x-is-search-path", isSearchPath ? "true" : "false");

  return response;
}

// 모든 경로에 대해 middleware 적용
export const config = {
  matcher: "/:path*",
};
