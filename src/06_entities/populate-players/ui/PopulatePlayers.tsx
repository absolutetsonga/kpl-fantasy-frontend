import { IPlayer } from "@/src/07_shared/models";
import { Player } from "@/src/07_shared/ui";
import { useHandleClickOnPlayer } from "../lib/hooks";

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

  return (
    <>
      {draftPlayersData.map((data, index) => {
        const { player, position } = data;

        return (
          <Player
            key={index}
            player={data.player}
            handleClick={() => handleClick({ player, position })}
            positionStyle={data.position.className}
          />
        );
      })}
    </>
  );
};
