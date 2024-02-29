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

  return (
    <PageContainer>
      <Link href="admin/player/create">
        <IoMdAdd className="w-8 h-8" />
      </Link>

      <PopulatePlayers
        players={teamData?.players ?? []}
        setPlayerId={setPlayerId}
      />

      <DeleteButton onDelete={onDelete} />
    </PageContainer>
  );
};
