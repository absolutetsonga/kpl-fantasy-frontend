import { useAtomValue, useSetAtom } from "jotai";
import {
  draftPlayersAtom,
  playerAtom,
  togglePlayerModalWindowAtom,
} from "@/src/07_shared/lib/store";

import { Button } from "@/src/07_shared/ui";
import { ModalWindowButton } from ".";
import {
  useDeleteDraftPlayer,
  useMakeCaptainDraftPlayer,
  useMakeViceCaptainDraftPlayer,
  useSwitchDraftPlayers,
  useViewDraftPlayerInformation,
} from "../lib/hooks";
import { IDraftPlayer } from "@/src/07_shared/models";

export const PlayerModalWindow = () => {
  const draftPlayers = useAtomValue(draftPlayersAtom);
  const player = useAtomValue(playerAtom);
  const setPlayerModalWindow = useSetAtom(togglePlayerModalWindowAtom);

  const draftPlayer = draftPlayers.find(
    (drPl: IDraftPlayer) => drPl.player === player?.id
  );

  const handleSwitchDraftPlayers = useSwitchDraftPlayers({ draftPlayer });
  const handleMakeCaptainDraftPlayer = useMakeCaptainDraftPlayer({
    draftPlayer,
  });
  const handleMakeViceCaptainDraftPlayer = useMakeViceCaptainDraftPlayer({
    draftPlayer,
  });
  const handleViewInformationClick = useViewDraftPlayerInformation({
    draftPlayer,
  });

  const handleDeleteDraftPlayer = useDeleteDraftPlayer(draftPlayer?.id);

  return (
    <div className="flex flex-col gap-10 rounded-2xl bg-white text-fuchsia-50 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-xl bg-gradient-to-b from-emerald-500 via-sky-200 to-sky-100">
      <div className="mt-3 text-center">
        <h3 className="text-lg leading-6  font-bold">{player?.name}</h3>
        <div className="flex flex-col items-center justify-center mt-2 px-7 py-3 text-md">
          <ModalWindowButton
            onClick={handleSwitchDraftPlayers}
            colorStyles="bg-gradient-to-tl from-violet-100 via-violet-600 to-cyan-700"
          >
            Substitute
          </ModalWindowButton>

          <ModalWindowButton
            onClick={handleMakeCaptainDraftPlayer}
            colorStyles="bg-gradient-to-tl from-green-100 via-green-500 to-blue-700"
          >
            Make Captain
          </ModalWindowButton>

          <ModalWindowButton
            onClick={handleMakeViceCaptainDraftPlayer}
            colorStyles="bg-gradient-to-tl from-pink-100 via-pink-500 to-purple-700"
          >
            Make Vice-Captain
          </ModalWindowButton>

          <ModalWindowButton
            onClick={handleViewInformationClick}
            colorStyles="bg-gradient-to-tl from-yellow-100 via-yellow-500 to-red-700"
          >
            View Information
          </ModalWindowButton>

          <ModalWindowButton
            onClick={handleDeleteDraftPlayer}
            colorStyles="bg-gradient-to-tl from-slate-400 via-red-700 to-red-800"
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
