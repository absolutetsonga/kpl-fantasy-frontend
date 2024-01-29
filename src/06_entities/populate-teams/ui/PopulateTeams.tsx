import Image from "next/image";
import { selectedTeamAtom } from "@/src/07_shared/lib/store";

import { useAtom } from "jotai";
import { useGetTeams } from "@/src/07_shared/lib/hooks/team";

import { ITeam } from "@/src/07_shared/models";

export const PopulateTeams = () => {
  const [selectedTeam, setSelectedTeam] = useAtom(selectedTeamAtom);
  const { data: teamsData } = useGetTeams();

  const handleClubClick = (clubName: string) => setSelectedTeam(clubName);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center">
        {teamsData?.map((team: ITeam) => (
          <Image
            src={`/images/teams/${team.name}.png`}
            width={60}
            height={60}
            alt={team.name}
            key={team.name}
            onClick={() => handleClubClick(team.name)}
            className="px-4 py-3"
          />
        ))}
      </div>

      {selectedTeam && (
        <div className="bg-yellow-700 px-4 py-3 font-bold">
          Selected Club: {selectedTeam}
        </div>
      )}
    </div>
  );
};
