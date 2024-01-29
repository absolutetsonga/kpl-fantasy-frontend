"use client";

import { useAtom } from "jotai";
import { Button } from "@/src/07_shared/ui";

import {
  selectedTeamAtom,
  sofascorePlayersAtom,
  sofascorePlayerStatsAtom,
  teamAtom,
} from "@/src/07_shared/lib/store";

import { sofascore_service } from "@/src/07_shared/api/services/sofascore";
import { ISofascorePlayer } from "@/src/07_shared/models/sofascore_player";
import {
  useGetPlayers,
  useUpdatePlayer,
} from "@/src/07_shared/lib/hooks/player";
import { IPlayer } from "@/src/07_shared/models";
import { PopulateTeams } from "@/src/06_entities/populate-teams/ui";
import PopulatePlayers from "@/src/06_entities/populate-players/ui/PopulatePlayers";

export const AdminPage = () => {
  const [selectedTeam, setSelectedTeam] = useAtom(selectedTeamAtom);
  const [team, setTeam] = useAtom(teamAtom);
  const [sofascorePlayers, setSofascorePlayers] = useAtom(sofascorePlayersAtom);

  const [sofascorePlayerStats, setSofascorePlayerStats] = useAtom(
    sofascorePlayerStatsAtom
  );

  const { data: playersData } = useGetPlayers();
  const { mutate } = useUpdatePlayer();

  const handleGetPlayers = async () => {
    if (selectedTeam) {
      const players = await sofascore_service.getPlayers(selectedTeam);

      setSofascorePlayers(players);

      const foundPlayers = playersData.filter((plD: IPlayer) => {
        return players.players.some((pl: ISofascorePlayer) => {
          if (pl.player.name === plD.name) {
            mutate({
              sofascore_id: pl.player.id,
              player_id: plD.id,
            });
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

  return (
    <div className="main-container">
      <PopulateTeams />
      {selectedTeam && <div></div>}
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

      <PopulatePlayers players={team?.players ?? []} />

      <iframe
        id="sofa-player-embed-78954"
        src="https://widgets.sofascore.com/en/embed/player/78954?widgetBackground=Gray&v=2"
        className="h-[737px] max-w-[730px] w-full"
      ></iframe>
    </div>
  );
};
