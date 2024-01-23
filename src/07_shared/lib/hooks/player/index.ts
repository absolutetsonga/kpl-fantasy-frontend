import { player_service } from "@/src/07_shared/api/services";
import { useQuery } from "@tanstack/react-query";

export const useGetPlayers = () => {
  return useQuery({
    queryKey: ["players"],
    queryFn: async () => await player_service.getPlayers(),
  });
};
