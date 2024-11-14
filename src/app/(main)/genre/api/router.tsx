import { GenreResultDto, GenreResultTypes } from "@/app/_types/genreMusicDto";

interface genreMusicInfoProps {
  genre: string;
}

export async function genreMusicInfoApi({
  genre,
}: genreMusicInfoProps): Promise<GenreResultDto> {
  const apiUrl = process.env.NEXT_PUBLIC_BE_API_GENRE_DETAIL;

  //TODO: 실제 API 호출로 변경
  try {
    //const response = await fetch(
    //  `${apiUrl}?genre=${encodeURIComponent(genre)}`
    //);

    //if (!response.ok) {
    //  throw new Error("API 호출에 실패했습니다.");
    //}

    //const data: GenreResultDto = await response.json();
    //return data;

    return {
      newSongs: [
        {
          id: 1,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "whiplash",
          artist: "aespa",
          description: "2021년 발매",
        },
        {
          id: 2,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
        {
          id: 2,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
        {
          id: 2,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
        {
          id: 2,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
      ],
      popularSongs: [
        {
          id: 3,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "whiplash",
          artist: "aespa",
          description: "2021년 발매",
        },
        {
          id: 4,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
        {
          id: 2,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
        {
          id: 2,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
        {
          id: 2,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
      ],
      artists: [
        {
          id: 5,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "whiplash",
          artist: "aespa",
          description: "2021년 발매",
        },
        {
          id: 6,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
      ],
      albums: [
        {
          id: 7,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "whiplash",
          artist: "aespa",
          description: "2021년 발매",
        },
        {
          id: 8,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
      ],
      playlists: [
        {
          id: 9,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "whiplash",
          artist: "aespa",
          description: "2021년 발매",
        },
        {
          id: 10,
          imageUrl: "http://dummyimage.com/100x100.png/cc0000/ffffff",
          title: "St.Chroma(feat. Dainel Caesar)",
          artist: "Tyler, The Creator, Dainel Caesar",
          description: "2021년 발매",
        },
      ],
    };
  } catch (error: any) {
    throw new Error(error.message || "서버 에러가 발생했습니다.");
  }
}
