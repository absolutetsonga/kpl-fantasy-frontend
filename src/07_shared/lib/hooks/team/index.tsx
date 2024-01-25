import { team_service } from "@/src/07_shared/api/services";
import { useQuery } from "@tanstack/react-query";

export const useGetTeams = () => {
  return useQuery({
    queryKey: ["team"],
    queryFn: async () => await team_service.getTeams(),
  });
};

export const useGetTeam = (team: number) => {
  return useQuery({
    queryKey: ["team"],
    queryFn: async () => await team_service.getTeam(team),
  });
};
