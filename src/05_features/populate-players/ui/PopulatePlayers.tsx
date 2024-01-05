import { IPlayer } from "@/src/07_shared/models";
import { Player } from "@/src/07_shared/ui";

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
  return (
    <>
      {draftPlayersData.map((data, index) => (
        <Player
          key={index}
          player={data.player}
          handleClick={() => console.log(data.player)}
          positionStyle={data.position.className}
        />
      ))}
    </>
  );
};
