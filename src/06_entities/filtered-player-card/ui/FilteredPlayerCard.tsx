import Image from "next/image";

import { IPlayer } from "@/src/07_shared/models";
import { Button } from "@/src/07_shared/ui";

type FilteredPlayerCardProps = {
  player: IPlayer;
  onClick: () => void;
};
export const FilteredPlayerCard = ({
  player,
  onClick,
}: FilteredPlayerCardProps) => {
  return (
    <div
      key={player.id}
      className="flex flex-row bg-white text-black p-4 rounded-lg shadow-md gap-4"
    >
      <div className="flex-shrink-0">
        <Image
          src={player.image_url}
          alt={player.name}
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{player.name}</h3>
        <p className="text-sm text-gray-600">{player.position}</p>
        <p className="text-sm">
          {player.price ? `$${player.price}` : "Price not available"}
        </p>
      </div>

      <Button onClick={onClick}>Select</Button>
    </div>
  );
};
