import Image from "next/image";

import { IPlayer } from "@/src/07_shared/models";
import { CloseButton } from "../../close-button/ui";

type FilteredPlayerCardProps = {
  player: IPlayer;
  onClick: () => void;
};
export const FilteredPlayerCard = ({
  player,
  onClick,
}: FilteredPlayerCardProps) => {
  const [firstName, lastName] = player.name.split(" ");

  const name = `${firstName[0]}. ${lastName}`;

  return (
    <button
      key={player.id}
      onClick={onClick}
      className="flex flex-row bg-white text-black p-4 rounded-lg shadow-md gap-4"
    >
      <div className="flex-shrink-0">
        <Image
          src={player.image_url}
          alt={player.name}
          width={50}
          height={64.84}
          className="rounded-full"
        />
      </div>

      <div className="flex-1 text-left">
        <div className="flex flex-row items-center text-lg font-semibold gap-1">
          <h3 className="break-words">{name}</h3>
          <span className="text-xs">({player.club})</span>
        </div>
        <p className="text-sm text-gray-600">{player.position}</p>
        <p className="text-sm">
          {player.price ? `$${player.price}` : "Price not available"}
        </p>
      </div>
      <div>Total Points: 0</div>
    </button>
  );
};
