import { toggleDeleteAtom } from "@/src/07_shared/lib/store";
import { IoMdClose } from "react-icons/io";

import { useAtom } from "jotai";

type DeleteButtonProps = {
  onDelete: () => void;
};

const DeleteButton = ({ onDelete }: DeleteButtonProps) => {
  const [toggleDelete, setToggleDelete] = useAtom(toggleDeleteAtom);

  return (
    <div
      className={`${
        toggleDelete ? "" : "hidden"
      } fixed inset-0 z-50 h-modal text-center`}
    >
      <div className="relative max-w-xl">
        <div className="bg-white rounded-lg shadow">
          <IoMdClose
            className="w-8 absolute right-1 top-1"
            onClick={() => setToggleDelete(false)}
          />
          <p className="text-lg font-semibold text-gray-800 mt-2 mb-4">
            Are you sure you want to delete this item?
          </p>

          <div className="flex justify-center space-x-4">
            <button
              className="py-2 px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => setToggleDelete(false)}
            >
              No, cancel
            </button>
            <button
              className="py-2 px-4 text-sm font-medium text-white bg-red-600 border border-transparent rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              onClick={onDelete}
            >
              Yes, I am sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
