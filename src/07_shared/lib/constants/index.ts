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
  { name: "GK", className: "absolute top-10 left-[380px]" },

  { name: "LD", className: "absolute top-40 left-20" },
  { name: "LCD", className: "absolute top-40 left-[270px]" },
  { name: "RCD", className: "absolute top-40 right-[270px]" },
  { name: "RD", className: "absolute top-40 right-20" },

  { name: "LM", className: "absolute top-[320px] left-40" },
  { name: "RM", className: "absolute top-[320px] right-40" },
  { name: "CM", className: "absolute top-[320px] left-[380px]" },

  { name: "LS", className: "absolute top-[500px] left-40" },
  { name: "RS", className: "absolute top-[500px] right-40" },
  { name: "CS", className: "absolute top-[520px] left-[380px]" },

  { name: "SGK", className: "absolute bottom-[30px] left-[120px]" },
  { name: "SD", className: "absolute bottom-[30px] left-[292px]" },
  { name: "SM", className: "absolute bottom-[30px] left-[464px]" },
  { name: "SS", className: "absolute bottom-[30px] left-[636px]" },
];

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
