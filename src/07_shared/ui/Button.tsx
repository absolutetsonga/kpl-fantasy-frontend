type PropsButton = {
  onClick?: () => void;
  children: React.ReactNode;
  className: string;
}

export const Button = ({ children, onClick, className }: PropsButton) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);
