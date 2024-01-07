import { Button } from "@/src/07_shared/ui";
import Image from "next/image";

type CloseButtonProps = {
  onClick: () => void;
  className: string;
};

export const CloseButton = ({ onClick, className }: CloseButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={className}
    >
      <Image
        src="/images/close-button.svg"
        width={12}
        height={12}
        alt={"close-button"}
      />
    </Button>
  );
};