import { useAtomValue, useSetAtom } from "jotai";
import {
  draftPlayerAtom,
  draftPlayersAtom,
  playerAtom,
  togglePlayerModalWindowAtom,
} from "@/src/07_shared/lib/store";

import { Button } from "@/src/07_shared/ui";
import { ModalWindowButton } from ".";
import { find_draft_substitution_draft_position } from "../lib/utils";

export const PlayerModalWindow = () => {
  const draftPlayers = useAtomValue(draftPlayersAtom);
  const draftPlayer = useAtomValue(draftPlayerAtom);
  const setPlayerModalWindow = useSetAtom(togglePlayerModalWindowAtom);
  const player = useAtomValue(playerAtom);

  const handleSwitchClick = () => {
    const substitutionPlayer = draftPlayers.find(
      (drPl) =>
        drPl.position ===
        find_draft_substitution_draft_position(draftPlayer?.position)
    );
  };

  const handleMakeCaptainClick = () => {};
  const handleMakeViceCaptainClick = () => {};
  const handleViewInformationClick = () => {};
  const handleDeletePlayerClick = () => {};

  return (
    <div className="flex flex-col gap-10 rounded-2xl bg-gray-600 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="mt-3 text-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {player?.name}
        </h3>
        <div className="mt-2 px-7 py-3">
          <ModalWindowButton
            onClick={handleSwitchClick}
            colorStyles="bg-purple-600 hover:bg-purple-700"
          >
            Substitute
          </ModalWindowButton>

          <ModalWindowButton
            onClick={handleMakeCaptainClick}
            colorStyles="bg-green-500 hover:bg-green-600"
          >
            Make Captain
          </ModalWindowButton>

          <ModalWindowButton
            onClick={handleMakeViceCaptainClick}
            colorStyles="bg-teal-400 hover:bg-teal-500"
          >
            Make Vice-Captain
          </ModalWindowButton>

          <ModalWindowButton
            onClick={handleViewInformationClick}
            colorStyles="bg-blue-500 hover:bg-blue-600 "
          >
            View Information
          </ModalWindowButton>

          <ModalWindowButton
            onClick={handleDeletePlayerClick}
            colorStyles="bg-red-500 bg-red-500"
          >
            Delete Player
          </ModalWindowButton>
        </div>

        <div className="items-center px-4 py-3">
          <Button onClick={() => setPlayerModalWindow(false)}>Close</Button>
        </div>
      </div>
    </div>
  );
};
