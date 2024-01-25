import { Player } from "@/src/07_shared/ui";
import { useHandleClickOnPlayer } from "../lib/hooks";

import { useAtomValue } from "jotai";
import {
  draftPlayersAtom,
  draftPlayersDataAtom,
  teamsAtom,
} from "@/src/07_shared/lib/store";

export const PopulatePlayers = () => {
  const handleClick = useHandleClickOnPlayer();

  const draftPlayers = useAtomValue(draftPlayersAtom);
  const draftPlayersData = useAtomValue(draftPlayersDataAtom);
  const teams = useAtomValue(teamsAtom);

  return (
    <>
      {draftPlayersData.map((data, index) => {
        const { player, position } = data;

        const draftPlayer = draftPlayers.find(
          (drPlData) => drPlData.player === player.id
        );

        const team = teams.find((team) => team.id === player.team);

        return (
          <Player
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
