export const GameweekInfo = () => {
  return (
    <section className="flex w-full items-center justify-center flex-col rounded-xl bg-field-gradient px-6 py-4">
      <div className="w-full max-w-[860px] h-[80px] px-2 bg-white bg-opacity-60 rounded-md shadow flex justify-start items-start">
        <div className="flex flex-col w-full h-full pb-2 justify-between items-center">
          <div className="self-stretch px-4 py-1 bg-fuchsia-950 rounded-bl-md rounded-br-md">
            <div className="text-center text-emerald-400 text-md md:text-lg lg:text-xl font-normal">
              Gameweek 21
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-center text-fuchsia-950 text-xs sm:text-sm md:text-lg lg:text-xl font-normal">
              Gameweek 21: Sat 13 Jan 17:00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
