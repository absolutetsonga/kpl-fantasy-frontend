import Image from "next/image";
import { IDraftPlayer, IPlayer } from "../models";

type PlayerProps = {
  player: IPlayer;
  draftPlayer: IDraftPlayer | undefined;
  positionStyle: string;
  handleClick: () => void;
};

export const Player = ({
  player,
  positionStyle,
  draftPlayer,
  handleClick,
}: PlayerProps) => {
  const [firstName, lastName] = player.name.split(" ");

  const name = lastName ? lastName : firstName;

  return (
    <button
      className={`${positionStyle} shadow-lg w-[120px] h-[120px] flex flex-col items-center justify-center z-10 rounded-2xl `}
    >
      <Image
        src={player.image_url}
        width={90}
        height={90}
        alt={player.name}
        className="object-contain max-h-[90px]"
        onClick={handleClick}
      />

      <div className="w-full rounded-b-2xl bg-violet-950">
        {name && (
          <p className="w-full text-xs font-bold px-2 py-[0.4em]">{name}</p>
        )}
      </div>

      {draftPlayer?.id && (
        <Image
          src="/images/more-info.svg"
          width={20}
          height={20}
          alt="more-info"
          className="absolute right-1 top-1"
        />
      )}

      {draftPlayer?.is_vice_captain && (
        <Image
          src="/images/vice-captain-logo.svg"
          width={20}
          height={20}
          alt="vice-captain"
          className="absolute right-1 top-6"
        />
      )}

      {draftPlayer?.is_captain && (
        <Image
          src="/images/captain-logo.svg"
          width={20}
          height={20}
          alt="captain"
          className="absolute right-1 top-6"
        />
      )}
    </button>
  );
};
