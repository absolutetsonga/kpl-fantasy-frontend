export const CLUBS_TRANSFERMARKT_IDS: { [key: string]: number } = {
  "FC Astana": 22220,
  "FC Ordabasy": 16779,
  "FC Aktobe": 10157,
  "FC Kairat": 10482,
  "FC Qyzyljar": 22995,
  "FC Kaysar": 19294,
  "FC Tobol": 10481,
  "FC Atyrau": 16198,
  "FC Maktaaral": 44486,
  "FC Shakhter": 10480,
  "FC Zhetysu": 15299,
  "FC Yelimay": 31007,
  "FC Turan": 77711,
  "FC Zhenis": 12019,
};

export const CLUBS_SOFASCORE_IDS: { [key: string]: number } = {
  "FC Astana": 36155,
  "FC Ordabasy": 5366,
  "FC Aktobe": 5355,
  "FC Kairat": 5172,
  "FC Qyzyljar": 5367,
  "FC Kaysar": 36142,
  "FC Tobol": 5362,
  "FC Atyrau": 5356,
  "FC Maktaaral": 90334,
  "FC Shakhter": 5360,
  "FC Zhetysu": 5364,
  "FC Yelimay": 464803,
  "FC Turan": 316183,
  "FC Zhenis": 5363,
};

export const TEAMS_IDS: { [key: number]: string } = {
  1: "FC Astana",
  2: "FC Ordabasy",
  3: "FC Aktobe",
  4: "FC Kairat",
  5: "FC Qyzyljar",
  6: "FC Kaysar",
  7: "FC Tobol",
  8: "FC Atyrau",
  9: "FC Maktaaral",
  10: "FC Shakhter",
  11: "FC Zhetysu",
  12: "FC Yelimay",
  13: "FC Turan",
  14: "FC Zhenis",
};

export const PLAYERS_STYLE_POSITIONS = [
  { name: "GK" },

  { name: "LD" },
  { name: "LCD" },
  { name: "RCD" },
  { name: "RD" },

  { name: "LM" },
  { name: "RM" },
  { name: "CM" },

  { name: "LS" },
  { name: "RS" },
  { name: "CS" },

  { name: "SGK" },
  { name: "SD" },
  { name: "SM" },
  { name: "SS" },
];

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
