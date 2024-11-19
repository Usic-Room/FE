export type GenreResultTypes = {
  id: number;
  imageUrl: string;
  artist: string;
  title: string | null;
  description: string | null;
};

export type GenreResultDto = {
  newSongs: GenreResultTypes[];
  popularSongs: GenreResultTypes[];
  artists: GenreResultTypes[];
  albums: GenreResultTypes[];
  playlists: GenreResultTypes[];
};
