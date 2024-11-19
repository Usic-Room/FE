import "server-only";
import SpotifyIcon from "@/public/images/spotify.svg";

export function AuthHeaderSpotifyLogoSC() {
  return (
    <header className="flex justify-center py-8 bg-white">
      <SpotifyIcon />
    </header>
  );
}
