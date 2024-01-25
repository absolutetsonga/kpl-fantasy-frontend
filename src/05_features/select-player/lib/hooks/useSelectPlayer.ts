import { useCreatePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import { useAtom, useSetAtom } from "jotai";

import { IDraftPlayer } from "@/src/07_shared/models";

import {
  draftPlayersAtom,
  togglePlaceholderModalWindowAtom,
} from "@/src/07_shared/lib/store";
import { toast } from "react-toastify";

type Props = {
  draftPlayer: IDraftPlayer;
};

export const useSelectPlayer = () => {
  const { mutate } = useCreatePlayer();
  const setPlaceholderModalWindow = useSetAtom(
    togglePlaceholderModalWindowAtom
  );

  const [draftPlayers, setDraftPlayers] = useAtom(draftPlayersAtom);

  const handleSelectPlayer = ({ draftPlayer }: Props) => {
    mutate(draftPlayer, {
      onSuccess: () => {
        setDraftPlayers([...draftPlayers, { ...draftPlayer }]);
        toast.success("Player added successfully");
      },
      onSettled: () => setPlaceholderModalWindow(false),
    });
  };

  return handleSelectPlayer;
};
