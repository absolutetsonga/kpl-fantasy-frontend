"use client";

import Link from "next/link";

import { useAtomValue } from "jotai";
import { teamAtom } from "@/src/07_shared/lib/store";

import { PopulateTeams } from "@/src/06_entities/populate-teams/ui";
import { PopulatePlayers } from "@/src/06_entities/populate-players/ui";

import { IoMdAdd } from "react-icons/io";

export const AdminPage = () => {
  const team = useAtomValue(teamAtom);

  return (
    <div className="relative main-container">
      <Link href="admin/player/create">
        <IoMdAdd className="absolute top-2 right-2 w-8 h-8" />
      </Link>

      <PopulateTeams />

      <PopulatePlayers players={team?.players ?? []} />
    </div>
  );
};
