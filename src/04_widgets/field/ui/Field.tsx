import { useAtomValue } from "jotai";
import {
  togglePlaceholderModalWindowAtom,
  togglePlayerModalWindowAtom,
} from "@/src/07_shared/lib/store/";

import { generate_draft_placeholder_players } from "../lib/utils";

import { PopulateDraftPlayers } from "@/src/06_entities/populate-draft-players/ui";
import { PlayerModalWindow } from "@/src/05_features/modify-player/ui";
import { PlaceholderModalWindow } from "@/src/05_features/select-player/ui";

export const Field = () => {
  const togglePlayerModalWindow = useAtomValue(togglePlayerModalWindowAtom);
  const togglePlaceholderModalWindow = useAtomValue(
    togglePlaceholderModalWindowAtom
  );

  const draft_placeholder_players = generate_draft_placeholder_players();

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="flex flex-col items-center bg-field-image bg-cover bg-top w-full md:w-[680px] lg:w-[880px] gap-8 md:gap-10 lg:gap-14 py-10">
        <PopulateDraftPlayers
          draft_placeholder_players={draft_placeholder_players}
          positions={["GK"]}
        />
        <PopulateDraftPlayers
          draft_placeholder_players={draft_placeholder_players}
          positions={["LD", "LCD", "RCD", "RD"]}
        />
        <PopulateDraftPlayers
          draft_placeholder_players={draft_placeholder_players}
          positions={["LM", "CM", "RM"]}
        />
        <PopulateDraftPlayers
          draft_placeholder_players={draft_placeholder_players}
          positions={["LS", "CS", "RS"]}
        />
      </div>
      
      <div className="flex justify-center bg-field-bench-image w-full h-40">
        <PopulateDraftPlayers
          draft_placeholder_players={draft_placeholder_players}
          positions={["SGK", "SD", "SM", "SS"]}
        />
      </div>

      {togglePlayerModalWindow && <PlayerModalWindow />}
      {togglePlaceholderModalWindow && <PlaceholderModalWindow />}
    </div>
  );
};
