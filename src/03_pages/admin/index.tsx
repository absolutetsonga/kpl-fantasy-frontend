"use client";

import Image from "next/image";
import { useAtom } from "jotai";

import {
  player_service,
  team_service,
  transfermarkt_service,
} from "@/src/07_shared/api/services";

import { Button } from "@/src/07_shared/ui";

import {
  selectedTeamAtom,
  transfermarktPlayerAtom,
  transfermarktTeamAtom,
  createdTeamAtom,
} from "@/src/07_shared/lib/store";
import { IPlayerTransfermarkt } from "@/src/07_shared/models";
import { CLUBS_TRANSFERMARKT_IDS } from "@/src/07_shared/lib/constants";

export const AdminPage = () => {
  const [transfermarktPlayers, setTransfermarktPlayers] = useAtom(
    transfermarktPlayerAtom
  );

  const [transfermarktTeam, setTransfermarktTeam] = useAtom(
    transfermarktTeamAtom
  );

  const [createdTeam, setCreatedTeam] = useAtom(createdTeamAtom);
  const [selectedTeam, setSelectedTeam] = useAtom(selectedTeamAtom);

  const handleGetPlayers = async () => {
    if (selectedTeam) {
      const response = await transfermarkt_service.getPlayers(selectedTeam);

      setTransfermarktPlayers(response);
    }
  };

  const handleGetTeam = async () => {
    if (selectedTeam) {
      const response = await transfermarkt_service.getTeam(selectedTeam);

      setTransfermarktTeam(response);
    }
  };

  const handleCreatePlayers = () => {
    transfermarktPlayers.forEach(async (player) => {
      const team = await team_service.getTeamByName(selectedTeam);
      const response = await player_service.createPlayer(player, team.id);

      console.log(response);
    });
  };

  const handleCreateTeam = async () => {
    if (transfermarktTeam?.name && transfermarktTeam?.image) {
      const response = await team_service.createTeam({
        name: transfermarktTeam?.name,
        image: transfermarktTeam?.image,
      });

      console.log(response);
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
          {Object.keys(CLUBS_TRANSFERMARKT_IDS).map((clubName) => (
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
          Get All Players (Transfermarket API)
        </Button>

        <Button
          className="px-4 py-3 bg-violet-600 rounded-2xl"
          onClick={handleGetTeam}
        >
          Get Team (Transfermarket API)
        </Button>

        <Button
          className="px-4 py-3 bg-violet-600 rounded-2xl"
          onClick={handleCreatePlayers}
        >
          Create Players
        </Button>
        <Button
          className="px-4 py-3 bg-violet-600 rounded-2xl"
          onClick={handleCreateTeam}
        >
          Create Team
        </Button>
      </div>

      <div className="team-info text-center">
        <h2 className="text-2xl font-bold mb-4">
          Team: {transfermarktTeam?.name}
        </h2>
        <Image
          src={transfermarktTeam?.image ?? ""}
          width={200}
          height={200}
          alt={`Logo of ${transfermarktTeam?.name}`}
          className="object-contain object-center"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {transfermarktPlayers.map((trPlayer: IPlayerTransfermarkt) => {
          return (
            <div
              key={trPlayer.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={trPlayer.image}
                width={200}
                height={200}
                alt={trPlayer.name}
                className="w-full h-48 object-contain object-center"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold truncate">
                  {trPlayer.name}
                </h3>
                <p className="text-gray-600">Age: {trPlayer.age}</p>
                <p className="text-gray-600">
                  Position: {trPlayer.positions.first.group}
                </p>
                <p className="text-gray-600">
                  Nationality: {trPlayer.nationalities[0].name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
