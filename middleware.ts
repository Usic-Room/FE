import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // User-Agent 문자열에서 모바일 기기 여부 확인
  const userAgent = request.headers.get("user-agent") || "";
  const isMobileUserAgent = /mobile|android|iphone|ipad|ipod/i.test(userAgent);

  // NextResponse 객체를 생성하고, 모바일 여부를 헤더에 설정
  const response = NextResponse.next();
  response.headers.set(
    "x-is-mobile-user",
    isMobileUserAgent ? "true" : "false"
  );

  console.log("User-Agent:", userAgent);
  console.log("Is Mobile User:", isMobileUserAgent);

  return response;
}

// 모든 경로에 대해 middleware 적용
export const config = {
  matcher: "/:path*",
};

//이 코드는 모바일과 PC 사용자를 구분하는 데 도움이 됩니다. 다만, x-is-mobile-user 헤더는 브라우저에는 노출되지 않으므로,
//이 값은 서버 컴포넌트에서만 사용할 수 있습니다.
//import { headers } from "next/headers";

//export default function MyComponent() {
//  const isMobileUser = headers().get("x-is-mobile-user") === "true";

//  return (
//    <div>
//      {isMobileUser ? <p>모바일 사용자입니다.</p> : <p>데스크탑 사용자입니다.</p>}
//    </div>
//  );
//}
