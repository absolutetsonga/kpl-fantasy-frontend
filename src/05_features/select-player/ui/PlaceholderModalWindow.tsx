import { togglePlaceholderModalWindowAtom } from "@/src/07_shared/lib/store";
import { useSetAtom } from "jotai";

import { Button } from "@/src/07_shared/ui";
import { PopulateFilteredPlayers } from "./";

export const PlaceholderModalWindow = () => {
  const setPlaceholderModalWindow = useSetAtom(
    togglePlaceholderModalWindowAtom
  );

  return (
    <div className="w-[600px] rounded-2xl bg-gray-600 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="max-h-[1000px] flex flex-col gap-4 overflow-scroll px-8 py-4">
        <Button onClick={() => setPlaceholderModalWindow(false)}>Close</Button>
        <PopulateFilteredPlayers />
      </div>
    </div>
  );
};
