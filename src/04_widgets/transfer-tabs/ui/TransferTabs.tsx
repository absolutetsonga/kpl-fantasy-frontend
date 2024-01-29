import { draftAtom } from "@/src/07_shared/lib/store";
import { useAtomValue } from "jotai";

export type Props = {
  title: string;
  value: string;
};

const TransferTab = ({ title, value }: Props) => (
  <div className="flex flex-1 flex-col items-center justify-start py-2">
    <div className="text-center text-[#37003C] text-lg font-normal">
      {title}
    </div>
    <div className="text-center text-[#37003C] text-2xl font-normal">
      {value}
    </div>
  </div>
);

export const TransferTabs = () => {
  const draft = useAtomValue(draftAtom);

  return (
    <div className="grid grid-cols-3 justify-between items-center w-full mx-auto">
      <TransferTab title="Free Transfers" value={`${draft?.left_transfers}`} />
      <TransferTab title="Money Remaining" value={`${draft?.total_budget} ₸`} />
    </div>
  );
};
