import { AuthLinkButtonSC } from "@/components/(auth)/serverComponents/AuthLinkButtonSC";

export default {
  title: "Components/Login/ResetPassword/Success/serverComponents",
  tags: ["autodocs"],
  component: AuthLinkButtonSC,
};

export const DefaultBackToLoginPageButton = {
  render: () => (
    <AuthLinkButtonSC
      href={`${process.env.NEXT_PUBLIC_LOGIN}`}
      buttonDescription="로그인 화면으로 돌아가기"
    />
  ),
};
