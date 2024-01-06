type ModalWindowButtonProps = {
  onClick: () => void;
  colorStyles: string;
  children: React.ReactNode;
};

export const ModalWindowButton = ({
  onClick,
  colorStyles,
  children,
}: ModalWindowButtonProps) => {
  return (
    <button
      className={`${colorStyles} mb-2 text-white text-sm py-2 rounded focus:outline-none w-full shadow-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
