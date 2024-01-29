import Image from "next/image";

import { useAtomValue } from "jotai";
import {
  togglePlaceholderModalWindowAtom,
  togglePlayerModalWindowAtom,
} from "@/src/07_shared/lib/store/";

import { generate_draft_placeholder_players } from "../lib/utils";

import { PopulateDraftPlayers } from "@/src/06_entities/populate-draft-players/ui";
import { PlayerModalWindow } from "@/src/05_features/modify-player/ui";
import { PlaceholderModalWindow } from "@/src/05_features/select-player/ui";
import { Bench } from "@/src/06_entities/bench/ui";

export const Field = () => {
  const togglePlayerModalWindow = useAtomValue(togglePlayerModalWindowAtom);
  const togglePlaceholderModalWindow = useAtomValue(
    togglePlaceholderModalWindowAtom
  );

  const draft_placeholder_players = generate_draft_placeholder_players();

  return (
    <div className="relative">
      <Image
        src="/images/squad-pitch.svg"
        width={880}
        height={833}
        alt="football-field"
        className="w-auto"
      />

      <PopulateDraftPlayers
        draft_placeholder_players={draft_placeholder_players}
      />

      <Bench />

      {togglePlayerModalWindow && <PlayerModalWindow />}
      {togglePlaceholderModalWindow && <PlaceholderModalWindow />}
    </div>
  );
};
