"use client";

import { useAtom, useAtomValue } from "jotai";
import { Button } from "@/src/07_shared/ui";
import { CLUBS_SOFASCORE_IDS } from "@/src/07_shared/lib/constants";

import {
  playersAtom,
  selectedTeamAtom,
  sofascorePlayersAtom,
  sofascorePlayerStatsAtom,
} from "@/src/07_shared/lib/store";

import { sofascore_service } from "@/src/07_shared/api/services/sofascore";
import { ISofascorePlayer } from "@/src/07_shared/models/sofascore_player";
import {
  useGetPlayers,
  useUpdatePlayer,
} from "@/src/07_shared/lib/hooks/player";
import { IPlayer } from "@/src/07_shared/models";

export const AdminSofascorePage = () => {
  const [selectedTeam, setSelectedTeam] = useAtom(selectedTeamAtom);
  const [sofascorePlayers, setSofascorePlayers] = useAtom(sofascorePlayersAtom);

  const [sofascorePlayerStats, setSofascorePlayerStats] = useAtom(
    sofascorePlayerStatsAtom
  );

  const { data: playersData } = useGetPlayers();
  const { mutate: updatePlayer } = useUpdatePlayer();

  const handleGetPlayers = async () => {
    if (selectedTeam) {
      const players = await sofascore_service.getPlayers(selectedTeam);

      setSofascorePlayers(players);

      const foundPlayers = playersData.filter((plD: IPlayer) => {
        return players.players.some((pl: ISofascorePlayer) => {
          if (pl.player.name === plD.name) {
            updatePlayer({ ...plD, sofascore_id: pl.player.id });
          }
          return pl.player.name === plD.name;
        });
      });

      console.log(foundPlayers);
    }
  };

  const handleGetSofascorePlayerStats = async (
    playerId: number,
    matchId: number
  ) => {
    if (playerId && matchId) {
      const playerStats = await sofascore_service.getPlayerStatisticsByGame(
        playerId,
        matchId
      );

      setSofascorePlayerStats(playerStats);
    }
  };

  const handleClubClick = (clubName: string) => setSelectedTeam(clubName);

  return (
    <div className="main-container">
      <div className="flex flex-col gap-10">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {Object.keys(CLUBS_SOFASCORE_IDS).map((clubName) => (
            <button
              key={clubName}
              onClick={() => handleClubClick(clubName)}
              className="bg-green-500 px-4 py-3"
            >
              {clubName}
            </button>
          ))}
        </div>

        {selectedTeam && (
          <div className="bg-yellow-700 px-4 py-3 font-bold">
            Selected Club: {selectedTeam}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          className="px-4 py-3 bg-violet-600 rounded-2xl"
          onClick={handleGetPlayers}
        >
          Get All Players (Sofascore API)
        </Button>

        <Button
          className="px-4 py-3 bg-violet-600 rounded-2xl"
          onClick={() => handleGetSofascorePlayerStats(12, 12)}
        >
          Get Player Stats (Sofascore API)
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {sofascorePlayers?.players.map((el) => {
          return (
            <div
              key={el.player.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold truncate">
                  {el.player.id} {el.player.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      <iframe
        id="sofa-player-embed-78954"
        src="https://widgets.sofascore.com/en/embed/player/78954?widgetBackground=Gray&v=2"
        // style={
        //   "height:737px!important;max-width:730px!important;width:100%!important"
        // }
        // frameborder="0"
        // scrolling="no"
        className="h-[737px] max-w-[730px] w-full"
      ></iframe>
    </div>
  );
};
