import Image from "next/image";

import { IPlayer } from "@/src/07_shared/models";
import { useAtomValue } from "jotai";
import { teamsAtom } from "@/src/07_shared/lib/store";

type FilteredPlayerCardProps = {
  player: IPlayer;
  onClick: () => void;
};

export const FilteredPlayerCard = ({
  player,
  onClick,
}: FilteredPlayerCardProps) => {
  const teams = useAtomValue(teamsAtom);
  const [firstName, lastName] = player.name.split(" ");

  const name = `${lastName ? `${firstName[0]}.` : `${firstName}`} ${
    lastName ? lastName : ""
  }`;

  console.log(teams);
  const team = teams.filter((tm) => tm.name === player.club)[0];

  console.log({ team });
  console.log({ teamImage: team.image_url });
  console.log({ playerImage: player.image_url });

  return (
    <button
      key={player.id}
      onClick={onClick}
      className="flex flex-row items-center bg-white text-black p-4 rounded-lg shadow-md gap-4"
    >
      <div className="flex-shrink-0">
        {player?.image_url && (
          <Image
            src={player?.image_url}
            alt={player?.name}
            width={50}
            height={64.84}
            style={{ width: "auto", height: "auto" }}
            className="rounded-full"
          />
        )}
      </div>

      <div className="flex-1 text-left">
        <div className="flex flex-row items-center text-lg font-semibold gap-1">
          {team?.image_url && (
            <Image
              src={team.image_url}
              width={30}
              height={30}
              alt={team.name}
            />
          )}

          <h3 className="break-words">{name}</h3>
        </div>
        <p className="text-sm text-gray-600">{player?.position}</p>
        <p className="text-sm">
          {player?.price ? `$${player.price} ₸` : "Price not available"}
        </p>
      </div>
      <div>0</div>
    </button>
  );
};
