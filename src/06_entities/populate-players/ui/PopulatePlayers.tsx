import Image from "next/image";
import Link from "next/link";

import { MdEdit } from "react-icons/md";

import { IPlayer } from "@/src/07_shared/models";

export const PopulatePlayers = ({ players }: { players: IPlayer[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 relative">
      {players?.map((pl) => {
        return (
          <div
            className="flex justify-between w-full items-center p-4 bg-white shadow-lg rounded-lg"
            key={pl.name}
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                src={pl.image_url}
                alt={pl.name}
                width={60}
                height={60}
                className="rounded-full mr-4 object-cover"
              />
              <div>
                <div className="text-xl font-semibold">{pl.name}</div>
                <div className="text-gray-600">{pl.club}</div>
                <div className="flex items-center mt-2">
                  <Image
                    src={pl.nationality_image_url}
                    alt={pl.name}
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                  <div className="flex flex-col md:flex-row">
                    <p>{pl.nationality}</p>
                    <span className="ml-2 text-sm text-gray-600">
                      {pl.age} years old
                    </span>
                    <span className="ml-2 text-sm text-gray-600">
                      {pl.height} m
                    </span>
                    <span className="ml-2 text-sm text-gray-600">
                      {pl.is_right_foot ? (
                        <p>Right foot</p>
                      ) : (
                        <p> Left foot </p>
                      )}
                    </span>
                    <span className="ml-2 text-sm text-gray-600">
                      {pl.position}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Link href={`/admin/player/${pl.id}`}>
              <MdEdit className="w-6 h-6 cursor-pointer" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
