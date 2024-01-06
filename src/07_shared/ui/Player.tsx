import Image from "next/image";
import { IPlayer } from "../models";

type PlayerProps = {
  player: IPlayer;
  positionStyle: string;
  handleClick: () => void;
};

export const Player = ({ player, positionStyle, handleClick }: PlayerProps) => {
  const [firstName, lastName] = player.name.split(" ");

  const name = player.name ? `${firstName[0].toUpperCase()}. ${lastName}` : "";

  return (
    <button
      className={`${positionStyle} w-[120px] h-[120px] flex flex-col items-center justify-center gap-2`}
      onClick={handleClick}
    >
      <Image
        src={player.image_url}
        width={90}
        height={90}
        alt={player.name}
        className="rounded-2xl shadow-lg object-contain max-h-[90px]"
      />

      <div>
        {name && (
          <p className="w-full text-xs font-bold bg-violet-950 px-2 py-[0.4em]">
            {name}
          </p>
        )}
      </div>
    </button>
  );
};
