import { DraftPlayer } from "@/src/07_shared/ui";
import { useHandleClickOnPlayer } from "../lib/hooks";

import { useAtomValue } from "jotai";
import {
  draftPlayersAtom,
  draftPlayersDataAtom,
  teamsAtom,
} from "@/src/07_shared/lib/store";
import { IDraftPlayer } from "@/src/07_shared/models";
import { useGetDraftPlayersData } from "@/src/04_widgets/field/lib/hooks/useGetDraftPlayersData";

type PopulateDraftPlayersProps = {
  draft_placeholder_players: IDraftPlayer[];
};

export const PopulateDraftPlayers = ({
  draft_placeholder_players,
}: PopulateDraftPlayersProps) => {
  const handleClick = useHandleClickOnPlayer();

  const draftPlayers = useAtomValue(draftPlayersAtom);
  const teams = useAtomValue(teamsAtom);

  const draftPlayersData = useGetDraftPlayersData({
    draft_placeholder_players,
  });

  return (
    <>
      {draftPlayersData.map((data, index) => {
        const { player, position } = data;

        const draftPlayer = draftPlayers.find(
          (drPlData) => drPlData.player === player.id
        );

        const team = teams.find((team) => team.id === player.team);

        return (
          <DraftPlayer
            key={index}
            player={data.player}
            draftPlayer={draftPlayer}
            teamImage={team?.image_url}
            handleClick={() => handleClick({ player, position })}
            positionStyle={data.position.className}
          />
        );
      })}
    </>
  );
};
