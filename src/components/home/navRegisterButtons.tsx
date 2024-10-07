import Link from "next/link";

export function NavRegisterButtons() {
  const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION || "/error";
  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || "/error";

  return (
    <div className="flex item-center justify-center gap-2">
      <Link href={registrationUrl}>
        <RegisterButton
          name={"가입하기"}
          backgroundColor={"bg-gray-950"}
          fontColor={"text-white"}
        />
      </Link>
      <Link href={loginUrl}>
        <RegisterButton
          name={"로그인하기"}
          backgroundColor={"bg-white"}
          fontColor={"text-gray-950"}
        />
      </Link>
    </div>
  );
}
interface RegisterButtonProps {
  name: string;
  backgroundColor: string;
  fontColor: string;
}

export function RegisterButton({
  name,
  backgroundColor,
  fontColor,
}: RegisterButtonProps) {
  return (
    <div
      className={`py-4 px-7 rounded-full ${backgroundColor} ${fontColor} w-auto text-sm whitespace-nowrap`}
    >
      {name}
    </div>
  );
}
