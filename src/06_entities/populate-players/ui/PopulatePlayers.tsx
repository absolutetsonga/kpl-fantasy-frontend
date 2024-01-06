import { IPlayer } from "@/src/07_shared/models";
import { Player } from "@/src/07_shared/ui";
import { useHandleClickOnPlayer } from "../lib/hooks";

import { useAtomValue } from "jotai";
import { draftPlayersAtom } from "@/src/07_shared/lib/store";

type PopulatePlayersProps = {
  draftPlayersData: {
    player: IPlayer;
    position: {
      name: string;
      className: string;
    };
  }[];
};

export const PopulatePlayers = ({ draftPlayersData }: PopulatePlayersProps) => {
  const handleClick = useHandleClickOnPlayer();
  const draftPlayers = useAtomValue(draftPlayersAtom);

  return (
    <>
      {draftPlayersData.map((data, index) => {
        const { player, position } = data;
        const draftPlayer = draftPlayers.find(
          (drPlData) => drPlData.player === player.id
        );

        return (
          <Player
            key={index}
            player={data.player}
            draftPlayer={draftPlayer}
            handleClick={() => handleClick({ player, position })}
            positionStyle={data.position.className}
          />
        );
      })}
    </>
  );
};
