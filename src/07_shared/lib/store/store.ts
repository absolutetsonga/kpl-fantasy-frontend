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

export const allPlayersAtom = atom<IPlayer[]>([]);

export const draftAtom = atom<IDraft | null>(null);
export const draftPlayerAtom = atom<IDraftPlayer | null>(null);

export const playerAtom = atom<IPlayer | null>(null);
export const playersAtom = atom<IPlayer[]>([]);

export const fetchedPlayersDataAtom = atom<IPosition[] | IPlayer[]>([]);

export const transfermarktPlayerAtom = atom<IPlayerTransfermarkt[]>([]);
export const transfermarktTeamAtom = atom<ITeamTransfermarkt | null>(null);

export const selectedTeamAtom = atom<string>("");
export const createdTeamAtom = atom<ITeam>({ name: "", image: "" });

export const togglePlayerModalWindowAtom = atom<boolean>(false);
export const togglePlaceholderModalWindowAtom = atom<boolean>(false);

export const playerPositionAtom = atom<string>("");
