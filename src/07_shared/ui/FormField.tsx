import { UseFormRegister } from "react-hook-form";
import { IUser } from "@/src/07_shared/models";

type FormFieldProps = {
  name: "email" | "first_name" | "last_name" | "password" | "re_password";
  text: string;
  type: string;
  errorMessage: string | undefined;
  register: UseFormRegister<IUser>;
};

export const FormField = ({
  name,
  type,
  text,
  errorMessage,
  register,
}: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-6">
        {text}
      </label>

      <div className="mt-2">
        <input
          id={name}
          type={type}
          required
          {...register(name)}
          className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-gray-950"
        />
        {errorMessage && (
          <p className="mt-1 text-xs text-red-400">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};
