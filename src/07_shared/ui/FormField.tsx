import Link from "next/link";

import { UseFormRegister } from "react-hook-form";
import { IUser } from "../models";

type FormFieldProps = {
  name: keyof IUser;
  text: string;
  type: string;
  errorMessage: string | undefined;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  placeholder?: string;
  register: UseFormRegister<IUser>;
};

export const FormField = ({
  name,
  type,
  text,
  errorMessage,
  link,
  placeholder,
  register,
}: FormFieldProps) => {
  return (
    <div>
      <div className="flex flex-row items-center justfiy-between">
        <label
          htmlFor={name}
          className="flex-1 block text-sm font-medium leading-6"
        >
          {text}
        </label>
        {link && (
          <div className="block text-sm font-medium leading-6">
            <Link
              className="font-semibold text-indigo-600 dark:text-indigo-300 hover:text-indigo-500"
              href={link.linkUrl}
            >
              {link.linkText}
            </Link>
          </div>
        )}
      </div>

      <div className="mt-2">
        <input
          id={name}
          type={type}
          required
          {...register(name)}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-gray-950"
        />
        {errorMessage && (
          <p className="mt-1 text-xs text-red-400">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};
