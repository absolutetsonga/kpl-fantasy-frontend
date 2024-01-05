export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-white gap-10">
      {children}
    </div>
  );
};
