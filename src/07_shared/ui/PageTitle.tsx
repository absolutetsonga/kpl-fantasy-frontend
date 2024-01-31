import React from "react";

export const PageTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm text-gray-950 text-center">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">{description}</p>
    </div>
  );
};
