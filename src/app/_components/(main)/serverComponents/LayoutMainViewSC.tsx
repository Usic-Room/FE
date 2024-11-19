import "server-only";

export function Library() {
  return <h1>DummyLibrary</h1>;
}

export function NowPlaying() {
  return (
    <div className="bottom-0 w-full z-5">
      <div className="bg-black-121212 text-white">now playing....</div>
    </div>
  );
}

// TODO: Scrollbar CSS 처리
export function LayoutMainViewSC({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full grow rounded-lg overflow-y-auto sm:pl-[19.5rem]">
      <div className="bg-black-121212 text-white h-full flex flex-col">
        <div className="flex-grow p-4 overflow-y-auto scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}
