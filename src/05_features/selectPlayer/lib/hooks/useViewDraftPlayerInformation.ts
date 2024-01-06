import { CustomHookParams } from "../types";

export const useViewDraftPlayerInformation = ({
  draftPlayer,
}: CustomHookParams) => {
  const handleDraftPlayerInformation = () => {
    console.log(draftPlayer);
  };

  return handleDraftPlayerInformation;
};
