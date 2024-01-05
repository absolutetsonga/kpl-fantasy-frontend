import Image from "next/image";
import { IPlayer } from "../models";

type PlayerProps = {
  player: IPlayer;
  positionStyle: string;
  handleClick: () => void;
};

export const Player = ({ player, positionStyle, handleClick }: PlayerProps) => {
  return (
    <button
      className={`${positionStyle} flex flex-col items-center justify-center gap-4`}
      onClick={handleClick}
    >
      <Image
        src={player.image_url}
        width={80}
        height={80}
        alt={player.name}
        className="rounded-2xl shadow-lg"
      />

      <div>
        <p className="max-w-[80px]">{player.name}</p>
      </div>
    </button>
  );
};
