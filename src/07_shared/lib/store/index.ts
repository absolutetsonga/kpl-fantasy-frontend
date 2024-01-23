import { atom } from "jotai";
import {
  IPlayer,
  IPlayerTransfermarkt,
  IPosition,
  IDraft,
  ITeam,
  ITeamTransfermarkt,
  IDraftPlayer,
} from "../../models";

// draft
export const draftAtom = atom<IDraft | null>(null);
export const draftPlayersAtom = atom<IDraftPlayer[]>([]);
export const draftPlayerAtom = atom<IDraftPlayer | null>(null);
export const draftPlayersDataAtom = atom<IPlayer[]>([]); // player that related to the squad player

// players
export const playersAtom = atom<IPlayer[]>([]); // for all players
export const playerAtom = atom<IPlayer | null>(null);

export const fetchedPlayersDataAtom = atom<IPosition[] | IPlayer[]>([]); // nexer used

export const transfermarktPlayerAtom = atom<IPlayerTransfermarkt[]>([]);

export const playerPositionAtom = atom<string>("");

// team
export const transfermarktTeamAtom = atom<ITeamTransfermarkt | null>(null);

export const selectedTeamAtom = atom<string>("");
export const createdTeamAtom = atom<ITeam>({ name: "", image: "" });

// toggle
export const togglePlayerModalWindowAtom = atom<boolean>(false);
export const togglePlaceholderModalWindowAtom = atom<boolean>(false);

// auth

export const isAuthenticatedAtom = atom<boolean>(false);
export const isLoadingAtom = atom<boolean>(true);