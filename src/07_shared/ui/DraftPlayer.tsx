import Image from "next/image";
import { IDraftPlayer, IPlayer } from "../models";

type PlayerProps = {
  player: IPlayer;
  draftPlayer: IDraftPlayer | undefined;
  teamImage: string | undefined;
  handleClick: () => void;
};

export const DraftPlayer = ({
  player,
  draftPlayer,
  teamImage,
  handleClick,
}: PlayerProps) => {
  const [firstName, lastName] = player.name.split(" ");

  const name = lastName ? lastName : firstName;

  return (
    <button
      className={`relative shadow-lg md:w-28 md:h-28 flex flex-col items-center justify-center z-10 rounded-2xl text-white`}
    >
      <Image
        src={player.image_url}
        width={90}
        height={90}
        alt={player.name}
        className="object-contain rounded-2xl max-h-[70px] md:max-h-[95px]"
        onClick={handleClick}
      />

      {draftPlayer && (
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

      {teamImage && (
        <Image
          src={teamImage}
          width={32}
          height={32}
          alt="team image"
          className="absolute left-1 top-1"
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

      <div className="w-full rounded-b-2xl bg-[#37003C]">
        {name ? (
          <p className="w-full text-xs font-bold px-2 py-[0.4em]">{name}</p>
        ) : (
          <p className="w-full px-4 py-3"> </p>
        )}
      </div>
    </button>
  );
};
