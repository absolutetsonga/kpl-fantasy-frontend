import { useMutation, useQueryClient } from "@tanstack/react-query";
import { draft_player_service } from "@/src/07_shared/api/services";
import { IDraftPlayer } from "@/src/07_shared/models";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useAtomValue } from "jotai";
import { draftAtom } from "../../store";

interface ApiErrorResponse {
  detail: string;
}

export function useCreatePlayer() {
  const queryClient = useQueryClient();

  return useMutation<IDraftPlayer, AxiosError, IDraftPlayer>({
    mutationFn: async (data: IDraftPlayer) =>
      await draft_player_service.createDraftPlayer(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["draft"] }),
    onError: (error) => {
      toast.error(
        (error.response?.data as ApiErrorResponse).detail || "An error occurred"
      );
    },
  });
}

export function useUpdatePlayer() {
  const query_client = useQueryClient();

  return useMutation<IDraftPlayer, AxiosError, IDraftPlayer>({
    mutationFn: async (data: IDraftPlayer) =>
      await draft_player_service.updateDraftPlayer(data),
    onSuccess: () => query_client.invalidateQueries({ queryKey: ["draft"] }),
    onError: (error) => {
      toast.error(
        (error.response?.data as ApiErrorResponse).detail || "An error occurred"
      );
    },
  });
}

export function useDeletePlayer() {
  const draft = useAtomValue(draftAtom);
  const queryClient = useQueryClient();

  return useMutation<number, AxiosError, number>({
    mutationFn: async (draftPlayerId: number) =>
      await draft_player_service.deleteDraftPlayer(draftPlayerId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["draft", draft?.id] }),
    onError: (error) => {
      console.log(error);
      toast.error(
        (error.response?.data as ApiErrorResponse).detail || "An error occurred"
      );
    },
  });
}
