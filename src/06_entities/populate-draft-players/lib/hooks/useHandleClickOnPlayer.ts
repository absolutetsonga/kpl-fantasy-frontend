import {
  playerAtom,
  playerPositionAtom,
  togglePlaceholderModalWindowAtom,
  togglePlayerModalWindowAtom,
} from "@/src/07_shared/lib/store";
import { IPlayer, IPosition } from "@/src/07_shared/models";
import { useAtom, useSetAtom } from "jotai";

type useHandleClickOnPlayerParams = {
  player: IPlayer;
  position: IPosition;
};

export const useHandleClickOnPlayer = () => {
  const [placeholderModalWindow, setPlaceholderModalWindow] = useAtom(
    togglePlaceholderModalWindowAtom
  );

  const [playerModalWindow, setPlayerModalWindow] = useAtom(
    togglePlayerModalWindowAtom
  );

  const setPlayer = useSetAtom(playerAtom);
  const setPlayerPosition = useSetAtom(playerPositionAtom);

  const handleClick = ({ player, position }: useHandleClickOnPlayerParams) => {
    if (player.name && !placeholderModalWindow && !playerModalWindow) {
      setPlayer(player);
      setPlayerModalWindow(true);
      setPlayerPosition(position.name);
    } else if (!player.name && !placeholderModalWindow && !playerModalWindow) {
      setPlaceholderModalWindow(true);
      setPlayerPosition(position.name);
    } else {
      console.log("Please end your last changes!");
    }
  };
  
  return handleClick;
};
