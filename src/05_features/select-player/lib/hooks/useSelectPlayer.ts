import { useCreatePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import { useSetAtom } from "jotai";

import { IDraftPlayer } from "@/src/07_shared/models";

import { togglePlaceholderModalWindowAtom } from "@/src/07_shared/lib/store";
import { toast } from "react-toastify";

type Props = {
  draftPlayer: IDraftPlayer;
};

export const useSelectPlayer = () => {
  const { mutate } = useCreatePlayer();

  const setPlaceholderModalWindow = useSetAtom(
    togglePlaceholderModalWindowAtom
  );

  const handleSelectPlayer = ({ draftPlayer }: Props) => {
    mutate(draftPlayer, {
      onSuccess: () => {
        toast.success("Player added successfully");
      },
      onSettled: () => setPlaceholderModalWindow(false),
    });
  };

  return handleSelectPlayer;
};
