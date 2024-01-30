import { team_service } from "@/src/07_shared/api/services";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";

import { userAtom } from "../../store";

import { ITeam } from "@/src/07_shared/models";
import { toast } from "react-toastify";

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

export const useCreateTeam = () => {
  const user = useAtomValue(userAtom);

  return useMutation({
    mutationFn: async (team: ITeam) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only admins can create players.");
        throw new Error("Unauthorized: Only admins can create players.");
      }

      await team_service.createTeam(team);
    },
  });
};

export const useUpdateTeam = () => {
  const user = useAtomValue(userAtom);

  return useMutation({
    mutationFn: async (team: ITeam) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only admins can create players.");
        throw new Error("Unauthorized: Only admins can create players.");
      }

      await team_service.updateTeam(team);
    },
  });
};

export const useDeleteTeam = () => {
  const user = useAtomValue(userAtom);

  return useMutation({
    mutationFn: async (team: ITeam) => {
      if (!user?.is_staff) {
        toast.error("Unauthorized: Only admins can create players.");
        throw new Error("Unauthorized: Only admins can create players.");
      }

      await team_service.deleteTeam(team.id ?? 0);
    },
  });
};
