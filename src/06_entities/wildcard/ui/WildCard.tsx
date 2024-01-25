import cn from "classnames";

type Props = {
  played: boolean | undefined;
  title: string;
};

export const WildCard = ({ played, title }: Props) => {
  const className = cn(
    "w-full p-2 rounded shadow flex justify-center items-center",
    {
      "bg-zinc-100": played,
      " bg-gameweek-gradient ": !played,
    }
  );

  return (
    <button className="flex-1 px-1 flex flex-col justify-start items-center">
      <div className="w-full flex flex-col justify-start items-center gap-4">
        <div className="w-full text-center text-fuchsia-950 text-md font-normal underline">
          {title}
        </div>
        <div className={className}>
          <div className="text-center text-fuchsia-950 text-md font-normal">
            {played ? <p>Played</p> : <p>Play</p>}
          </div>
        </div>
      </div>
    </button>
  );
};
