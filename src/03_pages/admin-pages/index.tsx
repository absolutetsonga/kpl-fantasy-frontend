"use client";

import Link from "next/link";

import { useAtomValue } from "jotai";
import { userAtom } from "@/src/07_shared/lib/store";

import { PopulatePlayers } from "@/src/06_entities/populate-players/ui";
import { PageContainer } from "@/src/07_shared/ui";

import { IoMdAdd } from "react-icons/io";

import { useState } from "react";
import { useDeletePlayer } from "@/src/07_shared/lib/hooks/player";

import { toast } from "react-toastify";
import { useGetTeam } from "@/src/07_shared/lib/hooks/team";
import DeleteButton from "@/src/06_entities/delete-button/ui/DeleteButton";
import { IPlayer } from "@/src/07_shared/models";

export const AdminPage = () => {
  const [playerId, setPlayerId] = useState<number>(0);

  const user = useAtomValue(userAtom);

  const { data: teamData } = useGetTeam(user?.team_admin || -1);
  const { mutate: deletePlayer } = useDeletePlayer();

  const onDelete = () => {
    deletePlayer(playerId, {
      onSuccess: () => {
        toast.success("Player deleted successfully");
      },
      onError: (err: Error) => {
        console.error(err);
      },
    });
  };

  console.log(teamData);
  const goalkeepers = teamData?.players?.filter(
    (pl: IPlayer) => pl.position === "Goalkeeper"
  );

  const defenders = teamData?.players?.filter(
    (pl: IPlayer) => pl.position === "Defender"
  );

  const middlefielders = teamData?.players?.filter(
    (pl: IPlayer) => pl.position === "Mittelfeld"
  );

  const strikers = teamData?.players?.filter(
    (pl: IPlayer) => pl.position === "Striker"
  );

  return (
    <PageContainer>
      <Link href="admin/player/create">
        <IoMdAdd className="w-8 h-8" />
      </Link>

      <h3 className="text-2xl font-bold">Goalkeepers</h3>
      <PopulatePlayers players={goalkeepers} setPlayerId={setPlayerId} />

      <h3 className="text-2xl font-bold">Defenders</h3>
      <PopulatePlayers players={defenders} setPlayerId={setPlayerId} />

      <h3 className="text-2xl font-bold">Middlefielders</h3>
      <PopulatePlayers players={middlefielders} setPlayerId={setPlayerId} />

      <h3 className="text-2xl font-bold">Strikers</h3>
      <PopulatePlayers players={strikers} setPlayerId={setPlayerId} />

      <DeleteButton onDelete={onDelete} />
    </PageContainer>
  );
};
