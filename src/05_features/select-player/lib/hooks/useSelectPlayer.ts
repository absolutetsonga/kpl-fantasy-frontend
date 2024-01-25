import { useCreatePlayer } from "@/src/07_shared/lib/hooks/draft-player";
import {
  draftPlayersAtom,
  togglePlaceholderModalWindowAtom,
} from "@/src/07_shared/lib/store";
import { IDraftPlayer } from "@/src/07_shared/models";
import { useAtom, useSetAtom } from "jotai";

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
      },
      onError: (error) => console.log(error),
      onSettled: () => setPlaceholderModalWindow(false),
    });
  };

  return handleSelectPlayer;
};
