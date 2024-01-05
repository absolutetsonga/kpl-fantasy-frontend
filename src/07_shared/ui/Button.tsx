type PropsButton = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = ({ children, onClick }: PropsButton) => (
  <button onClick={onClick} className="px-4 py-3 bg-violet-600 rounded-2xl">
    {children}
  </button>
);
