type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return <div className={`main-container`}>{children}</div>;
};
