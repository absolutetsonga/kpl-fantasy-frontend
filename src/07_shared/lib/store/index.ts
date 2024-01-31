import { atom } from "jotai";
import {
  IPlayer,
  IPlayerTransfermarkt,
  IPosition,
  IDraft,
  ITeam,
  ITeamTransfermarkt,
  IDraftPlayer,
  IDraftPlayerData,
  IGameWeekRes,
  IGameWeekStatus,
  IUser,
  ISofascorePlayers,
  ISofascorePlayerStats,
} from "../../models";

// draft
export const draftAtom = atom<IDraft | null>(null);
export const draftPlayersAtom = atom<IDraftPlayer[]>([]);
export const draftPlayerAtom = atom<IDraftPlayer | null>(null);
export const draftPlayersDataAtom = atom<IDraftPlayerData[]>([]); // player that related to the squad player

// players
export const playersAtom = atom<IPlayer[]>([]); // for all players
export const playerAtom = atom<IPlayer | null>(null);

export const fetchedPlayersDataAtom = atom<IPosition[] | IPlayer[]>([]); // nexer used
export const playerPositionAtom = atom<string>("");

// team
export const teamsAtom = atom<ITeam[]>([]);
export const teamAtom = atom<ITeam | null>(null);
export const selectedTeamAtom = atom<string>("");
export const createdTeamAtom = atom<ITeam>({
  id: 0,
  name: "",
  image_url: "",
  players: [],
});

// game week
export const gameWeeksAtom = atom<IGameWeekRes[]>([]);
export const gameWeekAtom = atom<IGameWeekRes | null>(null);

export const gameWeekStatusAtom = atom<IGameWeekStatus>({
  status: "",
  process: "",
  message: "",
  time: "",
});

export const gameWeekStartAtom = atom<string>("");

// toggle
export const togglePlayerModalWindowAtom = atom<boolean>(false);
export const togglePlaceholderModalWindowAtom = atom<boolean>(false);

// auth
export const userAtom = atom<IUser | null>(null);
export const isAuthenticatedAtom = atom<boolean>(false);
export const isLoadingAtom = atom<boolean>(true);
export const hasAgreedAtom = atom<boolean>(false);

// sofascore
export const sofascorePlayersAtom = atom<ISofascorePlayers | null>(null);
export const sofascorePlayerStatsAtom = atom<ISofascorePlayerStats | null>(
  null
);

// transfermarkt
export const transfermarktPlayerAtom = atom<IPlayerTransfermarkt[]>([]);
export const transfermarktTeamAtom = atom<ITeamTransfermarkt | null>(null);
