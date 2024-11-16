import "server-only";

import LibraryLogo from "@/public/images/library.svg";
import PlusLogo from "@/public/images/plus.svg";

export function LayoutSideBarSC() {
  return (
    <div className="hidden h-full sm:block bg-black-121212 fixed left-0 w-[19rem] p-5 z-20 rounded-lg">
      <aside aria-label="Left Sidebar Navigation" className="relative">
        <div className="flex flex-row gap-3 items-center p-5 font-lg font-bold text-white">
          <LibraryLogo />
          <p className="mr-10">내 라이브러리</p>
          <PlusLogo />
        </div>
        {/* {
            isLogin ? <Library />
            : <DummyLibrary />
          } */}
      </aside>
    </div>
  );
}
