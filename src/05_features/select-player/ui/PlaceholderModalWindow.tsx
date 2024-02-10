import { motion, AnimatePresence } from "framer-motion";
import { togglePlaceholderModalWindowAtom } from "@/src/07_shared/lib/store";
import { useSetAtom } from "jotai";

import { PopulateFilteredPlayers } from "./";
import { CloseButton } from "@/src/06_entities/close-button/ui";

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    x: "-50%",
    y: "-50%",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.3,
    },
  },
};

export const PlaceholderModalWindow = () => {
  const setPlaceholderModalWindow = useSetAtom(
    togglePlaceholderModalWindowAtom
  );

  return (
    <AnimatePresence>
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="h-full w-[400px] md:w-[600px] rounded-2xl right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gradient-to-b from-emerald-500 via-sky-200 to-sky-100"
      >
        <div className="h-[95%] flex flex-col gap-4 px-8 py-4 overflow-x-hidden overflow-scroll">
          <div className="flex self-end">
            <CloseButton
              onClick={() => setPlaceholderModalWindow(false)}
              className="flex items-center justify-end bg-slate-50 bg-opacity-20 rounded-xl px-4 py-3"
            />
          </div>

          <PopulateFilteredPlayers />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
