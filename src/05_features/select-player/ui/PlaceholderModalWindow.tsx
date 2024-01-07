import Image from "next/image";

import { togglePlaceholderModalWindowAtom } from "@/src/07_shared/lib/store";
import { useSetAtom } from "jotai";

import { PopulateFilteredPlayers } from "./";
import { CloseButton } from "@/src/06_entities/close-button/ui";

export const PlaceholderModalWindow = () => {
  const setPlaceholderModalWindow = useSetAtom(
    togglePlaceholderModalWindowAtom
  );

  return (
    <div className="w-[600px] rounded-2xl right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gradient-to-b from-emerald-500 via-sky-200 to-sky-100">
      <div className="max-h-[600px] flex flex-col gap-4 overflow-scroll px-8 py-4 overflow-x-hidden">
        <div className="flex self-end">
          <CloseButton
            onClick={() => setPlaceholderModalWindow(false)}
            className="flex items-center justify-end bg-slate-50 bg-opacity-20 rounded-xl px-4 py-3"
          />
        </div>

        <PopulateFilteredPlayers />
      </div>
    </div>
  );
};
