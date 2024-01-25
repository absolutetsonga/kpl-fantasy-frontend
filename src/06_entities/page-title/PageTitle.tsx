import React from "react";

export const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm text-gray-950">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        {children}
      </h2>
    </div>
  );
};
