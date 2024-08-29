// page.tsx

import GoogleIcon from "../../../public/icons/google.svg"; // Correct import path
import SpotifyLogo from "../../../public/icons/spotify.svg"; // Correct import path

export default function Login() {
  return (
    <div className="flex flex-col items-center max-w-max mx-auto text-center p-16 right- bg-white min-h-screen font-pretendard font-bold">
      <SpotifyLogo className="mb-4" alt="Spotify Logo" />
      <h1 className="text-black text-center font-bold text-[50px] leading-[60px] tracking-[-1.6px] mb-6 font-Pretendard ">
        가입하고
        <br />
        원하는 음악을
        <br />
        감상하세요
      </h1>
      <div className="w-96 text-left mt-14">
        <p className="mb-3 font-bold text-sm ">이메일 주소</p>
        <input
          type="email"
          placeholder="이메일"
          className="w-full p-3 mb-4 border border-gray-878787 rounded"
        />
      </div>
      <button className="w-full p-3 mb-4 bg-custom-purple text-white font-bold rounded-full hover:bg-purple-700 ">
        다음
      </button>
      <div className="w-full flex items-center my-4">
        <hr className="flex-grow border-t border-gray-D9DADC" />
        <span className="px-2 text-black font-bold text-sm">또는</span>
        <hr className="flex-grow border-t border-gray-D9DADC" />
      </div>
      <button className="w-full p-3 mb-4 border-2 border-[#878787] flex items-center justify-center bg-white rounded-full">
        <GoogleIcon className="w-5 h-5 mr-2" alt="Google Icon" />
        Continue with Google
      </button>
      <p className="text-black mt-4">
        이미 계정이 있나요?{" "}
        <a href="#" className="text-black underline font-bold">
          여기에서 로그인하세요
        </a>
      </p>
    </div>
  );
}
