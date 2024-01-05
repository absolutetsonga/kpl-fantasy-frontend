"use client";

import Image from "next/image";
import { useAtom } from "jotai";

import {
  togglePlaceholderModalWindowAtom,
  togglePlayerModalWindowAtom,
} from "@/src/07_shared/lib/store/";

// import { PopulatePlayers, PlayerModalWindow, PlaceholderModalWindow } from ".";

export const Field = () => {
  const [togglePlayerModalWindow] = useAtom(togglePlayerModalWindowAtom);
  const [togglePlaceholderModalWindow] = useAtom(
    togglePlaceholderModalWindowAtom
  );

  return (
    <div className="relative">
      <Image
        src="/images/squad-pitch.svg"
        width={880}
        height={833}
        alt="football-field"
      />

      {/* <PopulatePlayers /> */}

      {/* {togglePlayerModalWindow && <PlayerModalWindow />} */}
      {/* {togglePlaceholderModalWindow && <PlaceholderModalWindow />} */}
    </div>
  );
};
