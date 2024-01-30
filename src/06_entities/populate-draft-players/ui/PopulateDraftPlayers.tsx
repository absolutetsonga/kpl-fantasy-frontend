import { DraftPlayer } from "@/src/07_shared/ui";
import { useHandleClickOnPlayer } from "../lib/hooks";

import { useAtomValue } from "jotai";
import { draftPlayersAtom, teamsAtom } from "@/src/07_shared/lib/store";
import { IDraftPlayer } from "@/src/07_shared/models";
import { useGetDraftPlayersData } from "@/src/04_widgets/field/lib/hooks/useGetDraftPlayersData";

import cn from "classnames";

type PopulateDraftPlayersProps = {
  draft_placeholder_players: IDraftPlayer[];
  positions: string[];
};

export const PopulateDraftPlayers = ({
  draft_placeholder_players,
  positions,
}: PopulateDraftPlayersProps) => {
  const className = cn("flex items-center flex-row w-[95%] md:w-[90%]", {
    "justify-center": positions.includes("GK"),
    "justify-between":
      positions.includes("LD") ||
      positions.includes("CS") ||
      positions.includes("SGK"),
    "justify-around": positions.includes("CM"),
  });

  const handleClick = useHandleClickOnPlayer();

  const draftPlayers = useAtomValue(draftPlayersAtom);
  const teams = useAtomValue(teamsAtom);

  const draftPlayersData = useGetDraftPlayersData({
    draft_placeholder_players,
  });

  const draftGoalkeeperData = draftPlayersData.filter((pl) => {
    return positions.includes(pl.position.name);
  });

  return (
    <div className={className}>
      {draftGoalkeeperData.map((data, index) => {
        const { player, position } = data;

        const draftPlayer = draftPlayers.find(
          (drPlData) =>
            drPlData.player === player.id && drPlData.position === "GK"
        );

        const team = teams.find((team) => team.id === player.team);

        return (
          <DraftPlayer
            key={index}
            player={data.player}
            draftPlayer={draftPlayer}
            teamImage={team?.image_url}
            handleClick={() => handleClick({ player, position })}
          />
        );
      })}
    </div>
  );
};
