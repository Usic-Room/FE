import { randomInt } from "crypto";

import { searchResultDto } from "@/types/searchResultDto";

export async function searchRequestByParams(searchUrl: string) {
  //  const apiUrl = process.env.NEXT_PUBLIC_BE_API_SEARCH;

  try {
    //const requestUrl = `${apiUrl}/${encodeURIComponent(params)}`;
    const response = await fetch(searchUrl);

    if (!response.ok) {
      throw new Error("Search failed.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Server error during search.");
  }
}

export async function searchRequestByQuery(searchParams: string) {
  try {
    const firstResponseMock: searchResultDto = {
      filterList: [
        "모두",
        "이벤트",
        "곡",
        "플레이리스트",
        "장르",
        "앨범",
        "프로필",
      ],
      events: [
        {
          eventImage: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          eventName: "2024년 락페스티벌",
          eventDate: new Date("2024-12-31"),
        },
        {
          eventImage: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          eventName: "2024년 힙합페스티벌",
          eventDate: new Date("2024-12-31"),
        },
      ],
      songs: [
        {
          artwork: "http://dummyimage.com/103x100.png/cc0000/ffffff",
          musicName: "whiplash",
          runningTime: 183,
          artistName: ["aespa"],
        },
        {
          artwork: "http://dummyimage.com/112x100.png/cc0000/ffffff",
          musicName: "St.Chroma(feat. Dainel Caesar)",
          runningTime: 197,
          artistName: ["Tyler, The Creator", "Dainel Caesar"],
        },
      ],
      playlists: [
        {
          artwork: "http://dummyimage.com/242x100.png/cc0000/ffffff",
          title: "쌈@뽕한 노래모음",
          username: "퉁퉁이엄마모퉁이",
        },
      ],
      genres: ["락", "힙합", "팝", "재즈", "클래식"],
      albums: [
        {
          artwork: "http://dummyimage.com/250x100.png/cc0000/ffffff",
          title: "Whiplash - The 5th Mini Album",
          artistName: ["aespa"],
          releaseYear: 2024,
        },
        {
          artwork: "http://dummyimage.com/232x100.png/5fa2dd/ffffff",
          title: "CHROMAKOPIA",
          artistName: ["Tyler, The Creator", "Dainel Caesar"],
          releaseYear: 2024,
        },
      ],
      profiles: [
        {
          profileImage: "http://dummyimage.com/177x100.png/dddddd/000000",
          username: "백종원중나빼면백종구십구",
        },
        {
          profileImage: "http://dummyimage.com/171x100.png/5fa2dd/ffffff",
          username: "티라미숙해",
        },
      ],
    };

    const secondResponseMock: searchResultDto = {
      filterList: ["모두", "이벤트", "곡", "플레이리스트", "장르", "프로필"],
      events: [
        {
          eventImage: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          eventName: "2024년 락페스티벌",
          eventDate: new Date("2024-12-31"),
        },
        {
          eventImage: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          eventName: "2024년 힙합페스티벌",
          eventDate: new Date("2024-12-31"),
        },
      ],
      songs: [
        {
          artwork: "http://dummyimage.com/137x100.png/ff4444/ffffff",
          musicName: "YOUUUU!!",
          runningTime: 183,
          artistName: ["YULEUM"],
        },
        {
          artwork: "http://dummyimage.com/112x100.png/cc0000/ffffff",
          musicName: "POWER",
          runningTime: 143,
          artistName: ["G-DRAGON"],
        },
      ],
      playlists: [
        {
          artwork: "http://dummyimage.com/211x100.png/cc0000/ffffff",
          title: "쌈@뽕한 노래모음",
          username: "퉁퉁이엄마모퉁이",
        },
      ],
      genres: ["락", "힙합", "팝", "재즈", "동요"],
      albums: [],
      profiles: [
        {
          profileImage: "http://dummyimage.com/119x100.png/5fa2dd/ffffff",
          username: "신림동힉힉호무리",
        },
        {
          profileImage: "http://dummyimage.com/125x100.png/dddddd/000000",
          username: "모수부호오너셰프안섬재",
        },
      ],
    };

    //TODO: status code + response 반환

    //setTimeout(() => {}, randomInt(1000, 3000));
    const response =
      Math.random() < 0.5 ? firstResponseMock : secondResponseMock;

    return { response, status: 400 };
  } catch (error) {
    throw new Error("Server error during search.");
  }
}
