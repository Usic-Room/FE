import { NextPage } from "next";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

const NotFound: NextPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/"></Link>
    </div>
  );
};
export default NotFound;

//https://velog.io/@yangareum1818/%EC%97%90%EB%9F%AC-Error-Next13.js-The-default-export-of-notFound-is-not-a-React-Component-in
