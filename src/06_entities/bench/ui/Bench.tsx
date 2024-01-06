import Image from "next/image";

export const Bench = () => {
  return (
    <div className="absolute bottom-0 left-2">
      <Image
        src="/images/substitution-background.svg"
        width={860}
        height={187}
        alt="bench"
      />
    </div>
  );
};
