import { genreTypes } from "@/types/genreTypes";

export type searchResultFilterTypes =
  | "모두"
  | "이벤트"
  | "곡"
  | "플레이리스트"
  | "장르"
  | "앨범"
  | "프로필";

export type searchResultEventTypes = {
  eventImage: string;
  eventName: string;
  eventDate: Date;
};

export type searchResultSongTypes = {
  artwork: string;
  musicName: string;
  runningTime: number;
  artistName: string[];
};

export type searchResultPlaylistTypes = {
  artwork: string;
  title: string;
  username: string;
};

export type searchResultAlbumTypes = {
  artwork: string;
  title: string;
  artistName: string[];
  releaseYear: number;
};

export type searchResultProfileTypes = {
  profileImage: string;
  username: string;
};

export type searchResultDto = {
  filterList: searchResultFilterTypes[];
  events: searchResultEventTypes[];
  songs: searchResultSongTypes[];
  playlists: searchResultPlaylistTypes[];
  genres: genreTypes[];
  albums: searchResultAlbumTypes[];
  profiles: searchResultProfileTypes[];
};
