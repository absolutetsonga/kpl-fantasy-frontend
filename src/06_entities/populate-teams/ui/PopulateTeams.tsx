import Image from "next/image";
import { selectedTeamAtom, teamAtom } from "@/src/07_shared/lib/store";

import { useAtom, useSetAtom } from "jotai";
import { useGetTeams } from "@/src/07_shared/lib/hooks/team";

import { ITeam } from "@/src/07_shared/models";

export const PopulateTeams = () => {
  const [selectedTeam, setSelectedTeam] = useAtom(selectedTeamAtom);

  const { data: teamsData } = useGetTeams();
  const setTeam = useSetAtom(teamAtom);

  const handleClubClick = (clubName: string) => {
    setSelectedTeam(clubName);

    const team = teamsData.filter((team: ITeam) => {
      return team.name === clubName;
    })[0];

    console.log(team);
    setTeam(team);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center flex-wrap">
        {teamsData?.map((team: ITeam) => {
          return (
            <Image
              src={`/images/teams/${team.name}.png`}
              width={80}
              height={80}
              alt={team.name}
              key={team.name}
              onClick={() => handleClubClick(team.name)}
              className="px-4 py-3"
            />
          );
        })}
      </div>

      {selectedTeam && (
        <div className="bg-green-500 text-white px-4 py-3 font-bold">
          Selected Club: {selectedTeam}
        </div>
      )}
    </div>
  );
};
