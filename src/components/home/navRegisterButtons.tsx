import Link from "next/link";

export function NavRegisterButtons() {
    const registrationUrl = process.env.NEXT_PUBLIC_REGISTRATION || "/error";
    const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || "/error";
    return (
        <div className="flex item-center justify-center gap-2">
            <Link href={registrationUrl}>
                <RegisterButton name={"가입하기"} backgroundColor={"bg-gray-950"} fontColor={"text-[#FFFFFF]"} />
            </Link>
            <Link href={loginUrl}>
                <RegisterButton name={"로그인하기"} backgroundColor={"bg-[#FFFFFF]"} fontColor={"text-gray-950"} />
            </Link>
        </div>
    );
}

interface RegisterButtonProps {
    name: String,
    backgroundColor: String,
    fontColor: String,
}

export function RegisterButton({ name, backgroundColor, fontColor }: RegisterButtonProps) {
    return (
        <div className={`py-4 px-7 rounded-full ${backgroundColor} ${fontColor}`}>
            {name}
        </div>
    );
}